import {Link} from  'react-router-dom';

function JobCard({company,id,jobTitle,status,dateApplied,jobLink,location,skillsRequired,numberOfOpenings,onEdit,onDelete}){
    return(
        <div className="mt-6 max-w-3xl bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-3 text-gray-800">{company}</h2>
            <p className="mb-2 text-gray-800"><strong>Id:</strong>{id}</p>
            <p className="mb-2 text-gray-800"><strong>Job Title:</strong> {jobTitle}</p>
            <p className="mb-2 text-gray-800"><strong>Status:</strong> {status}</p>
            <p className="mb-2 text-gray-800"><strong>Date Applied:</strong> {dateApplied}</p>
            <p className="mb-2 text-gray-800"><strong>Job Link:</strong> {jobLink}</p>
            <p className="mb-2 text-gray-800"><strong>Location:</strong> {location}</p>
            <p className="mb-2 text-gray-800"><strong>Skills Required:</strong> {skillsRequired}</p>
            <p className="mb-2 text-gray-800"><strong>Number of Openings:</strong> {numberOfOpenings}</p>
            <Link
             to={`/edit-job/${id}`}
             className="bg-blue-600 rounded-lg font-semibold px-4 py-2 text-white hover:bg-blue-700"onClick={() => onEdit(id)}>Edit</Link>
            <button className="bg-red-600 rounded-lg px-5 py-2 ml-2 font-semibold text-white hover:bg-red-700"onClick={() => onDelete(id)}>Delete</button>
          
        </div>
    )
}
export default JobCard;