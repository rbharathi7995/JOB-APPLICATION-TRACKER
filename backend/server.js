require("dotenv").config();

const dns=require("dns");
dns.setServers(['8.8.8.8','8.8.4.4'])

const express=require('express');//we need this bcz we are using get,post like this
const app=express();
const mongoose=require("mongoose");

const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const Job=require("./models/Job.js");
const User=require("./models/User.js");


app.use(express.json()); //  ← understands JSON body

const authMiddleware=(req,res,next)=>{
    try{
        const header=req.headers.authorization;
        if(!header){
            return res.status(401).json({message:"Unauthorized"});
        }
        const token=header.split(' ')[1];
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }
    catch(error){
        res.status(401).json({message:"Unauthorized"});
    }

}

//Routes for jobs
app.get('/api/jobs',authMiddleware,async(req,res)=>{
    try{
        const jobs=await Job.find({user:req.user.id});
        res.status(200).json(jobs);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }

})


app.get('/api/jobs/:id',authMiddleware,async(req,res)=>{
    try{
        const job=await Job.findOne({_id:req.params.id,user:req.user.id}); //user: is refers to the field name inside your Job document:
        
        if(!job){
            return res.status(404).json({message:"No Job Found"});
        }
        res.status(200).json(job);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }

})


app.post('/api/jobs',authMiddleware,async(req,res)=>{
    try{
        console.log(req.user);
        const job=await Job.create({...req.body,user:req.user.id});//spread operator Take everything inside this object/array and bring it here.
        res.status(201).json(job);
    } catch(error){
        res.status(400).json({message:error.message}); //to handle bad request
    }
})

app.put('/api/jobs/:id',authMiddleware,async(req,res)=>{
    try{
        const job=await Job.findOneAndUpdate({_id:req.params.id,user:req.user.id},req.body,
            {
                returnDocument:"after",
                runValidators:true
            
            })
         if(!job){
           return res.status(404).json("No Job Found");
         }
        
        res.status(200).json(job);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
})

app.delete('/api/jobs/:id',authMiddleware,async(req,res)=>{
    try{
        const job=await Job.findOneAndDelete({_id:req.params.id,user:req.user.id});
        if(!job){
            return res.status(404).json({message:"No Job Found"});
        }
        res.status(200).json(job);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
})

//user routes

app.post('/api/auth/register',async(req,res)=>{
    try{
        const user=await User.create(req.body);
        res.status(201).json(user);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
})
app.post('/api/auth/login',async(req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email});
        if(!user){
            return res.status(404).json({message:"Not Found data"});
        }
        
        const isMatch=await bcrypt.compare(req.body.password,user.password);
        
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }
            const token=jwt.sign({
            id:user._id,
            email:user.email
             },
              process.env.JWT_SECRET,
            {
               expiresIn:'30d'
            }
        )
       res.status(200).json(token);

    }
    catch(error){
        res.status(400).json({message:error.message});
    }
})

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected...');
    }
    catch(error){
        console.log(`Error:${error.message}`);
        process.exit(1);
    }
}

connectDB();

app.listen(5000,()=>{
 
 console.log("server started");
})

