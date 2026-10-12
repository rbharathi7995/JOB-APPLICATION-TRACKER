import {Link} from  'react-router-dom';

function JobCard({company,id,jobTitle,status,dateApplied,jobLink,location,skillsRequired,numberOfOpenings,onDelete}){
    return(
        <div className="mt-6 max-w-3xl bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-3 text-gray-800">{company}</h2>
            <p className="mb-2 text-gray-800"><strong>Job Title:</strong> {jobTitle}</p>
            <p className="mb-2 text-gray-800"><strong>Status:</strong>
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                {status}
            </span>
            </p>
            <p className="mb-2 text-gray-800"><strong>Date Applied:</strong> 
            {dateApplied
                ? new Date(dateApplied).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            })
            : "Not provided"}</p>
            <p className="mb-2 text-gray-800"><strong>Job Link:</strong>{' '}
             <a
               href= {jobLink}
               target="_blank"
               rel="noopener noreferrer"
               className="text-blue-600 underline hover:text-blue-800"
               >
                Open Job Posting
             </a>
            </p>
            <p className="mb-2 text-gray-800"><strong>Location:</strong> {location}</p>

            <p className="mb-2 text-gray-800"><strong>Skills Required:</strong> {skillsRequired}</p>
            {numberOfOpenings !== undefined &&
            numberOfOpenings !== null &&
            numberOfOpenings !== '' && (
            <p className="mb-2 text-gray-800"><strong>Number of Openings:</strong> {numberOfOpenings}</p>
            )}

            <Link
             to={`/edit-job/${id}`}
             className="bg-blue-600 rounded-lg font-semibold px-4 py-2 text-white hover:bg-blue-700">Edit</Link>
            <button className="bg-red-600 rounded-lg px-5 py-2 ml-2 font-semibold text-white hover:bg-red-700"onClick={() => onDelete(id)}>Delete</button>
          
        </div>
    )
}
export default JobCard;