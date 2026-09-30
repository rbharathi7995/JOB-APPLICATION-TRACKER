const express=require('express');
const router=express.Router();
const authMiddleware=require('../middleware/authMiddleware.js');
const Job=require('../models/Job.js');
const {getAllJobs, getSingleJob, createJob, updateJob, deleteJob} = 
      require('../controllers/jobControllers.js');

router.get('/',authMiddleware,getAllJobs);

router.get('/:id',authMiddleware,getSingleJob);

router.post('/',authMiddleware,createJob);

router.put('/:id',authMiddleware,updateJob);

router.delete('/:id',authMiddleware,deleteJob);



module.exports=router;
