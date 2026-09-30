const errorMiddleware=(err,req,res,next)=>{
    if(err.code===11000){
       return res.status(409).json({message:"Email already exists"});
    }
    res.status(500).json({message:err.message});
    
}

module.exports=errorMiddleware;