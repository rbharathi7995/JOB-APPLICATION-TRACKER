const express=require('express');
const router=express.Router();
const authMiddleware=require('../middleware/authMiddleware.js');
const Job=require('../models/Job.js');

router.get('/',authMiddleware,async(req,res)=>{
    try{
        const jobs=await Job.find({user:req.user.id});
        res.status(200).json(jobs);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
})

router.get('/:id',authMiddleware,async(req,res)=>{
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

router.post('/',authMiddleware,async(req,res)=>{
    try{
        console.log(req.user);
        const job=await Job.create({...req.body,user:req.user.id});//spread operator Take everything inside this object/array and bring it here.
        res.status(201).json(job);
    } catch(error){
        res.status(400).json({message:error.message}); //to handle bad request
    }
})

router.put('/:id',authMiddleware,async(req,res)=>{
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

router.delete('/:id',authMiddleware,async(req,res)=>{
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

module.exports=router;
