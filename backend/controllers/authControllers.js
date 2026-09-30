const User=require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');


const registerUser =async(req,res,next)=>{
    try{
        const user=await User.create(req.body);
        res.status(StatusCodes.OK).json({user:{
            id:user._id,
            name:user.name,
            email:user.email
        }});
    }
    catch(error){
        next(error);
    }
}

const loginUser = async(req,res,next)=>{
    try{
        const user=await User.findOne({email:req.body.email});
        if(!user){
            return res.status(StatusCodes.UNAUTHORIZED).json({message:"Invalid credentials"});
        }
        
        const isMatch=await bcrypt.compare(req.body.password,user.password);
        
        if(!isMatch){
            return res.status(StatusCodes.UNAUTHORIZED).json({message:"Invalid credentials"});
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
       res.status(StatusCodes.OK).json({token});

    }
    catch(error){
        next(error);
    }
}

module.exports ={registerUser,loginUser};