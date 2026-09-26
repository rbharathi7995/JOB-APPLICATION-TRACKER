require("dotenv").config();

const dns=require("dns");
dns.setServers(['8.8.8.8','8.8.4.4'])

const express=require('express');//we need this bcz we are using get,post like this
const app=express();
const mongoose=require("mongoose");

const Job=require("./models/Job.js");

app.use(express.json()); //  ← understands JSON body

app.get('/api/jobs',async(req,res)=>{
    try{
        const jobs=await Job.find()
        res.status(200).json(jobs);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }

})

app.get('/api/jobs/:id',async(req,res)=>{
    try{
        const job=await Job.findById(req.params.id);
        
        if(!job){
            return res.status(404).json({message:"Job not found"});
        }
        res.status(200).json(job);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }

})

app.post('/api/jobs',async(req,res)=>{
    try{
        const job=await Job.create(req.body);
        res.status(201).json(job);
    } catch(error){
        res.status(400).json({message:error.message}); //to handle bad request
    }
})

app.put('/api/jobs/:id',async(req,res)=>{
    try{
        const job=await Job.findByIdAndUpdate(req.params.id,req.body,
            {
                returnDocument:"after",
                runValidators:true
            
            })
        
        res.status(200).json(job);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
})

app.delete('/api/jobs/:id',async(req,res)=>{
    try{
        const job=await Job.findByIdAndDelete(req.params.id);
        if(!job){
            return res.status(404).json({message:"Job not found"});
        }
        res.status(200).json(job);
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

