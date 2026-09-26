const mongoose = require("mongoose")

const JobSchema=new mongoose.Schema({
    companyName:{
        type:String,
        required:[true,"please provide Name"],
        maxLength: 50,
    },
    jobTitle:{
        type:String,
        required:[true,"please provide jobTitle"]
    },
    status:{
        type:String,
        enum:["Applied","Interview","Offer","Rejected"], //it means don't accept any random status. It must be one of these four values
        default:"Applied"
    },
    dateApplied:{
        type:Date
    },
    jobLink:{
        type:String,
        required:[true,"please provide jobLink"]       
    },    
    location:{
        type:String,
        required:[true,"please provide location"]       
    }, 
    skillsRequired:{
        type:String,
        required:[true,"please provide required skills"]       
    },  
    numberOfOpenings:{
        type:Number
    }


})

module.exports=mongoose.model('Job',JobSchema)