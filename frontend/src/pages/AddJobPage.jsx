
import AddJob from '../components/AddJob.jsx';

function AddJobPage({ setJobs }) {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        Add Job
      </h1>

      <AddJob
        setJobs={setJobs}
        jobToEdit={null}
        setEditingJobId={() => {}}
      />
    </main>
  );
}

export default AddJobPage;
