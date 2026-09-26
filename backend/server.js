require("dotenv").config();

const dns=require("dns");
dns.setServers(['8.8.8.8','8.8.4.4'])

const express=require('express');//we need this bcz we are using get,post like this
const app=express();
const mongoose=require("mongoose");

const Job=require("./models/Job.js");

app.use(express.json()); //  ← understands JSON body

app.get('/api/jobs',(req,res)=>{
    res.send("Welcome to Job Application Tracker API");
})

app.post('/api/jobs',async(req,res)=>{
    const job=await Job.create(req.body); //job.create is asynchronous so we need to use await and async. 
    res.status(201).json(job);
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

