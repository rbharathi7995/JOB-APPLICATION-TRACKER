
function JobCard({company,jobTitle,status,dateApplied,jobLink,location,skillsRequired,numberOfOpenings}){
    return(
        <div>
            <h2>{company}</h2>
            <p><strong>Job Title:</strong> {jobTitle}</p>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Date Applied:</strong> {dateApplied}</p>
            <p><strong>Job Link:</strong> {jobLink}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Skills Required:</strong> {skillsRequired}</p>
            <p><strong>Number of Openings:</strong> {numberOfOpenings}</p>
          
         


        </div>
    )
}
export default JobCard;