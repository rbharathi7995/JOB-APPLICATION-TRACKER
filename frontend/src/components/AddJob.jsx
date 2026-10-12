import { useState } from 'react';
import JobForm from './JobForm';
import { useNavigate } from 'react-router-dom';

function AddJob({ setJobs , jobToEdit , setEditingJobId }) {
     const [errorMessage, setErrorMessage] = useState('');
     const [jobsFormData, setJobsFormData] = useState(
        jobToEdit
            ? {
                companyName: jobToEdit.companyName,
                jobTitle: jobToEdit.jobTitle,
                dateApplied: jobToEdit.dateApplied.split('T')[0],
                jobLink: jobToEdit.jobLink,
                location: jobToEdit.location,
                skillsRequired: jobToEdit.skillsRequired,
                numberOfOpenings: jobToEdit.numberOfOpenings,
                status: jobToEdit.status || 'Applied'
            }
            : {
                companyName: '',
                jobTitle: '',
                dateApplied: '',
                jobLink: '',
                location: '',
                skillsRequired: '',
                numberOfOpenings: '',
                status: 'Applied'
            }
    );

    function handleJobSubmit(){
        // Check whether any required field is empty or contains only spaces.
      if (
        !jobsFormData.companyName.trim() ||
        !jobsFormData.jobTitle.trim() ||
        !jobsFormData.jobLink.trim() ||
        !jobsFormData.location.trim() ||
        !jobsFormData.skillsRequired.trim()

        ){
            setErrorMessage('Please complete the required fields.');
            return;
        }
            try{
                const url=new URL(jobsFormData.jobLink.trim());
                if(url.protocol !== 'https:' && url.protocol !== 'http'){
                    throw new Error();
                }
            }
            catch{
                setErrorMessage('Enter a valid URL starting wiyth https://');
                return;
            }
            
        setErrorMessage('');
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
        }).then(async (response) =>{
            const data= await response.json();

            if(!response.ok){
                throw new Error(
                    data.message || data.error || 'Please check the required fields.'
                );
            }
            return data;
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

                navigate('/applications');

            setJobsFormData({
                companyName: '',
                jobTitle: '',  
                dateApplied: '',
                jobLink: '',
                location: '',
                skillsRequired: '',
                numberOfOpenings: ''
            });
        }).catch((error)=>{
        setErrorMessage(error.message || 'Unable to save the job.');    
        })
    }
    const navigate = useNavigate();
    
    return (
        <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">Add Job</h2>

            {errorMessage && (
            <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                {errorMessage}
            </p>
            )}

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