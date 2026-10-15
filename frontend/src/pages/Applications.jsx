import JobCard from "../components/JobCard";
import { Link } from 'react-router-dom';

function Applications({ jobs, onDelete }) {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        My Applications
      </h1>

  <Link
    to="/add-job"
    className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
  >
    + Add Job
  </Link>

      {jobs.length === 0 ? (
        <p className="mt-4">No job applications yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {jobs.map((job) => (
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
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Applications;