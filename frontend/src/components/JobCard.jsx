
function JobCard({company,jobTitle,status}){
    return(
        <div>
            <h2>{company}</h2>
            <p><strong>Job Title:</strong> {jobTitle}</p>
            <p><strong>Status:</strong> {status}</p>
        </div>
    )
}
export default JobCard;