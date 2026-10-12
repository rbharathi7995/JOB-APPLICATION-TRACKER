
import AddJob from '../components/AddJob.jsx';

function AddJobPage({ setJobs }) {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <AddJob
        setJobs={setJobs}
        jobToEdit={null}
        setEditingJobId={() => {}}
      />
    </main>
  );
}

export default AddJobPage;
