import { useState } from 'react';
import JobForm from './JobForm';

function AddJob({ setJobs , jobToEdit , setEditingJobId }) {
     const [jobsFormData, setJobsFormData] = useState(
        jobToEdit
            ? {
                companyName: jobToEdit.companyName,
                jobTitle: jobToEdit.jobTitle,
                dateApplied: jobToEdit.dateApplied.split('T')[0],
                jobLink: jobToEdit.jobLink,
                location: jobToEdit.location,
                skillsRequired: jobToEdit.skillsRequired,
                numberOfOpenings: jobToEdit.numberOfOpenings
            }
            : {
                companyName: '',
                jobTitle: '',
                dateApplied: '',
                jobLink: '',
                location: '',
                skillsRequired: '',
                numberOfOpenings: ''
            }
    );

    function handleJobSubmit(){
        const url=jobToEdit ? 
        `http://localhost:5000/api/jobs/${jobToEdit._id}`
         : 'http://localhost:5000/api/jobs';

        const method=jobToEdit ? 'PUT' : 'POST';

        fetch(url,{
            method:method,
            headers:{
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(jobsFormData) //jobsFormData is not already a string.it is an object.
        }).then((response) =>{
            return response.json();
        }).then((data)=>{
          // setJobs((prevJobs) => [...prevJobs, data]);
            setJobs((prevJobs) =>{
                if(jobToEdit){
                    const updatedJobs = prevJobs.map((job) => 
                        job._id === data._id  ? data : job
                ); 
                setEditingJobId(null); // Reset the editing job ID after updating  
                return updatedJobs;     
                }
                return [...prevJobs, data];
             })

            setJobsFormData({
                companyName: '',
                jobTitle: '',  
                dateApplied: '',
                jobLink: '',
                location: '',
                skillsRequired: '',
                numberOfOpenings: ''
            });
        })
    }
    
    return (
        <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">Add Job</h2>
 
        <JobForm
            jobsFormData={jobsFormData}
            setJobsFormData={setJobsFormData}
            jobToEdit={jobToEdit}
        />
            <button
            onClick={handleJobSubmit}
            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
            >
            {jobToEdit ? 'Update Job' : 'Add Job'}
            </button>

        </div>
    )
}

export default AddJob;