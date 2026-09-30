const errorMiddleware=(err,req,res,next)=>{
    if(err.code===11000){
       return res.status(409).json({message:"Email already exists"});
    }
    else if(err.name==="ValidationError"){
        const errors={};
        Object.keys(err.errors).forEach((key)=>{
           errors[key]=err.errors[key].message; 
        })
       return res.status(400).json({message:"Validation failed",errors:errors});
      
    }
    else if(err.name==="CastError"){
        return res.status(400).json({message:"Invalid job id"});
    }
    res.status(500).json({message:err.message});
    
}

module.exports=errorMiddleware;