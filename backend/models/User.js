const mongoose=require("mongoose");
const bcrypt=require('bcryptjs');

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide name']
    },
    email:{
        type:String,
        required:[true,'Please provide email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please provide password']
    }
})

UserSchema.pre('save',async function(){
    if(this.isModified('password')){  //Only hash when the password has actually changed.
        const salt=await bcrypt.genSalt(10);
        this.password=await bcrypt.hash(this.password,salt);
    }

    
});
module.exports=mongoose.model('User',UserSchema);