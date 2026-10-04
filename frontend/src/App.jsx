import { useEffect,useState } from 'react';
import JobCard from './components/JobCard.jsx';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import AddJob from './components/AddJob.jsx';
function App() {
      const[jobs, setJobs] = useState([]);
      const [loading, setLoading] = useState(true);
      const[editingJobId, setEditingJobId] = useState(null);
      const [isLoggedIn, setIsLoggedIn] = useState(
        () => localStorage.getItem('token') !== null
      );

      const jobToEdit =jobs.find((job => {
        return job._id === editingJobId;
      }))


      useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
         return;
        }
        
        fetch('http://localhost:5000/api/jobs',{
          method:'GET',
          headers: {
            Authorization:`Bearer ${token}`
          }
        })
        .then((response) => 
          response.json())
        .then((data) => {
          setJobs(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
      },[isLoggedIn]);
     

      function handleLogout(){
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        
        setJobs([]);
     }

     function handleEdit(id){
      setEditingJobId(id);

     }

  return (
    <>
       <Navbar handleLogout={handleLogout}/>
       {loading && <p>Loading...</p>}
       {jobs.length === 0 && !loading && isLoggedIn && <p>No jobs applications yet.</p>}

       {/* isLoggedIn decides whether to show jobs or Login form */}
       {isLoggedIn ? (
      <>
        <AddJob 
        key={jobToEdit ? jobToEdit._id : 'new'}
        setJobs={setJobs}
        jobToEdit={jobToEdit}
        setEditingJobId={setEditingJobId}
        />
       
        {jobs.map((job) => {
          return(
            <JobCard 
              key={job._id}
              id={job._id}
              company={job.companyName} 
              jobTitle={job.jobTitle} 
              status={job.status}
              dateApplied={job.dateApplied}
              jobLink={job.jobLink}
              location={job.location}
              skillsRequired={job.skillsRequired}
              numberOfOpenings={job.numberOfOpenings}
              onEdit={handleEdit}
            />       
          )
       })}

      </>
       )  : (
        <Login setIsLoggedIn={setIsLoggedIn}/> // Pass setter so Login can update App's login state   
       )}

    </>
  )
}

export default App
