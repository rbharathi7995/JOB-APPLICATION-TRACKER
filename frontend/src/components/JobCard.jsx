
function JobCard({company,id,jobTitle,status,dateApplied,jobLink,location,skillsRequired,numberOfOpenings,onEdit}){
    return(
        <div>
            <h2>{company}</h2>
            <p><strong>Id:</strong>{id}</p>
            <p><strong>Job Title:</strong> {jobTitle}</p>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Date Applied:</strong> {dateApplied}</p>
            <p><strong>Job Link:</strong> {jobLink}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Skills Required:</strong> {skillsRequired}</p>
            <p><strong>Number of Openings:</strong> {numberOfOpenings}</p>
            <button onClick={() => onEdit(id)}>Edit</button>
          
         


        </div>
    )
}
export default JobCard;