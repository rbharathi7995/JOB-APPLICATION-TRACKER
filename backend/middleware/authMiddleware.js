const jwt=require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

const authMiddleware=(req,res,next)=>{
    try{
        const header=req.headers.authorization;
        if(!header){
            return res.status(StatusCodes.UNAUTHORIZED).json({message:"Unauthorized"});
        }
        const token=header.split(' ')[1];
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }
    catch(error){
        res.status(StatusCodes.UNAUTHORIZED).json({message:"Unauthorized"});
    }
}


module.exports=authMiddleware;