const { StatusCodes } = require('http-status-codes');
const errorMiddleware=(err,req,res,next)=>{
    if(err.code===11000){
       return res.status(StatusCodes.CONFLICT).json({message:"Email already exists"});
    }
    else if(err.name==="ValidationError"){
        const errors={};
        Object.keys(err.errors).forEach((key)=>{
           errors[key]=err.errors[key].message; 
        })
       return res.status(StatusCodes.BAD_REQUEST).json({message:"Validation failed",errors:errors});
      
    }
    else if(err.name==="CastError"){
        return res.status(StatusCodes.BAD_REQUEST).json({message:"Invalid job id"});
    }
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:err.message});
    
}

module.exports=errorMiddleware;