import { useState } from 'react';

function AddJob({ setJobs }) {
    const [jobsFormData, setJobsFormData] = useState({
        companyName: '',
        jobTitle: '',
        dateApplied: '',
        jobLink: '',
        location: '',
        skillsRequired: '',
        numberOfOpenings: ''
    });

    function handleAddJob(){
        fetch('http://localhost:5000/api/jobs',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(jobsFormData) //jobsFormData is not already a string.it is an object.
        }).then((response) =>{
            return response.json();
        }).then((data)=>{
           setJobs((prevJobs) => [...prevJobs, data]);
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
        <div>
            <h2>Add Job</h2>
            <input
                type="text"
                placeholder="Company Name"
                value={jobsFormData.companyName}
                onChange={(e) =>
                    setJobsFormData({
                        ...jobsFormData, //means Keep all the existing values.
                        companyName: e.target.value//means Replace only companyName with the new value.

                    })
                } />
            <input
                type="text"
                placeholder="Job-Title"
                value={jobsFormData.jobTitle}
                onChange={(e) =>
                    setJobsFormData({
                        ...jobsFormData,
                        jobTitle: e.target.value
                    })
                }
            />
            <input
                type="date"
                value={jobsFormData.dateApplied}
                onChange={(e) =>
                    setJobsFormData({
                        ...jobsFormData,
                        dateApplied: e.target.value
                    })
                }
            />
            <input
                type="url"
                placeholder="Job Link"
                value={jobsFormData.jobLink}
                onChange={(e) =>
                    setJobsFormData({
                        ...jobsFormData,
                        jobLink: e.target.value
                    })
                }
            />
            <input
                type="text"
                placeholder="Location"
                value={jobsFormData.location}
                onChange={(e) =>
                    setJobsFormData({
                        ...jobsFormData,
                        location: e.target.value
                    })
                }
            />
            <input
                type="text"
                placeholder="Skills Required"
                value={jobsFormData.skillsRequired}
                onChange={(e) =>
                    setJobsFormData({
                        ...jobsFormData,
                        skillsRequired: e.target.value
                    })
                }
            />
            <input
                type="number"
                placeholder="Number of Openings"
                value={jobsFormData.numberOfOpenings}
                onChange={(e) =>
                    setJobsFormData({
                        ...jobsFormData,
                        numberOfOpenings: e.target.value
                    })
                }
            />

            <button onClick={handleAddJob}>Add Job</button>
        </div>
    )
}

export default AddJob;