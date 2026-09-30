const Job=require('../models/Job.js');
const { StatusCodes } = require('http-status-codes')
const getAllJobs=async(req,res,next)=>{
    try{
        const jobs=await Job.find({user:req.user.id});
        res.status(StatusCodes.OK).json(jobs);
    }
    catch(error){
        next(error);
    }
}

const getSingleJob=async(req,res,next)=>{
    try{
        const job=await Job.findOne({_id:req.params.id,user:req.user.id}); //user: is refers to the field name inside your Job document:
        
        if(!job){
            return res.status(StatusCodes.NOT_FOUND).json({message:"No Job Found"});
        }
        res.status(StatusCodes.OK).json(job);
    }
    catch(error){
         next(error);
    }
}

const createJob=async(req,res,next)=>{
    try{
        
        const job=await Job.create({...req.body,user:req.user.id});//spread operator Take everything inside this object/array and bring it here.
        res.status(StatusCodes.CREATED).json(job);
    } catch(error){
        next(error);
    }
}

const updateJob=async(req,res,next)=>{
    try{
        const job=await Job.findOneAndUpdate({_id:req.params.id,user:req.user.id},req.body,
            {
                returnDocument:"after",
                runValidators:true
            
            })
         if(!job){
           return res.status(StatusCodes.NOT_FOUND).json("No Job Found");
         }
        
        res.status(StatusCodes.OK).json(job);
    }
    catch(error){
        next(error);
    }
}

const deleteJob=async(req,res,next)=>{
    try{
        const job=await Job.findOneAndDelete({_id:req.params.id,user:req.user.id});
        if(!job){
            return res.status(StatusCodes.NOT_FOUND).json({message:"No Job Found"});
        }
        res.status(StatusCodes.OK).json(job);
    }
    catch(error){
        next(error);
    }
}

module.exports={getAllJobs ,getSingleJob, createJob, updateJob, deleteJob};