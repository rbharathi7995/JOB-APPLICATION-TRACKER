import { useEffect } from 'react';
import JobCard from './components/JobCard.jsx';
import Navbar from './components/Navbar.jsx';

function App() {

      const jobs=[
      {id:1, company:'Microsoft', jobTitle:'Software Engineer', status:'Applied' },
      {id:2, company:'Google', jobTitle:'Frontend Engineer', status:'Interview' },
      {id:3, company:'Amazon', jobTitle:'SDE Intern', status:'Rejected' }
      ];

      useEffect(() => {
        fetch('http://localhost:5000/api/jobs')
        .then((response) => 
          console.log(response))
        .catch((error) => console.log(error));   
      },[]);

  return (
    <>
       <Navbar/>

       {jobs.map((job) => {
        return(
          <JobCard 
          key={job.id}
          company={job.company} 
          jobTitle={job.jobTitle} 
          status={job.status}
          />       
         )
       }) }      
    </>
  )
}

export default App
