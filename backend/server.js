require("dotenv").config();

const dns=require("dns");
dns.setServers(['8.8.8.8','8.8.4.4'])

const express=require('express');//we need this bcz we are using get,post like this
const cors = require('cors');

const app=express();
const mongoose=require("mongoose");

const router=require('./routes/jobRoutes.js');
const authRouter=require('./routes/authRoutes.js');
const errorMiddleWare=require('./middleware/errorHandler.js');

app.use(cors());
app.use(express.json()); //  ← understands JSON body
//for job routes
app.use('/api/jobs',router);
//for athentication routes
app.use('/api/auth',authRouter);
app.use(errorMiddleWare);

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected...');
    }
    catch(error){
        console.log(`Error:${error.message}`);
        process.exit(1);
    }
}

connectDB();

app.listen(process.env.PORT || 5000,()=>{
 
 console.log("server started");
})

