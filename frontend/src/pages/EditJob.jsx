//import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddJob from '../components/AddJob.jsx';

function EditJob({jobs,setJobs}) {
  const { id } = useParams();
  const jobToEdit=jobs.find((job)=> job._id === id);
    return (
      <div>
        {jobToEdit ? (
          <AddJob
            setJobs={setJobs}
            jobToEdit={jobToEdit}
            setEditingJobId={() => {}}
          />
        ) : (
          <p>Loading job...</p>
        )}
      </div>
    );
}

export default EditJob;