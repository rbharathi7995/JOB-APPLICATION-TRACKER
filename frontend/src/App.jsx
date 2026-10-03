import { useEffect,useState } from 'react';
import JobCard from './components/JobCard.jsx';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
function App() {
      const[jobs, setJobs] = useState([]);
      const [isLoggedIn, setIsLoggedIn] = useState(false);      
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
        })
        .catch((error) => console.log(error));   
      },[isLoggedIn]);

  return (
    <>
       <Navbar/>
       {jobs.map((job) => {
        return(
          <JobCard 
          key={job._id}
          company={job.companyName} 
          jobTitle={job.jobTitle} 
          status={job.status}
          dateApplied={job.dateApplied}
          jobLink={job.jobLink}
          location={job.location}
          skillsRequired={job.skillsRequired}
          numberOfOpenings={job.numberOfOpenings}
          />       
         )
       }) }  
       <Login setIsLoggedIn={setIsLoggedIn}/>    
    </>
  )
}

export default App
