const User=require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser =async(req,res)=>{
    try{
        const user=await User.create(req.body);
        res.status(201).json(user);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
}

const loginUser = async(req,res)=>{
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
       res.status(200).json({token});

    }
    catch(error){
        res.status(400).json({message:error.message});
    }
}

module.exports ={registerUser,loginUser};