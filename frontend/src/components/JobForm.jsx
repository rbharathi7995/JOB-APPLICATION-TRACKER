 

function JobForm({jobsFormData ,setJobsFormData}) {
  return (
    <div>
            <input
                type="text"
                placeholder="Company Name"
                className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={jobsFormData.companyName}
                onChange={(e) =>
                    setJobsFormData({
                        ...jobsFormData, //means Keep all the existing values.
                        companyName: e.target.value//means Replace only companyName with the new value.

                    })
                } />
            <input
                type="text"
                placeholder="Job-Title"
                className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={jobsFormData.jobTitle}
                onChange={(e) =>
                    setJobsFormData({
                        ...jobsFormData,
                        jobTitle: e.target.value
                    })
                }
            />
            <input
                type="date"
                value={jobsFormData.dateApplied} //to get only the date part from the date-time string.
                className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                onChange={(e) =>
                    setJobsFormData({
                        ...jobsFormData,
                        dateApplied: e.target.value //to get only the date part from the date-time string.
                    })
                }
            />
            <input
                type="url"
                placeholder="Job Link"
                value={jobsFormData.jobLink}
                className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                onChange={(e) =>
                    setJobsFormData({
                        ...jobsFormData,
                        jobLink: e.target.value
                    })
                }
            />
            <input
                type="text"
                placeholder="Location"
                value={jobsFormData.location}
                className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                onChange={(e) =>
                    setJobsFormData({
                        ...jobsFormData,
                        location: e.target.value
                    })
                }
            />
            <input
                type="text"
                placeholder="Skills Required"
                value={jobsFormData.skillsRequired}
                className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                onChange={(e) =>
                    setJobsFormData({
                        ...jobsFormData,
                        skillsRequired: e.target.value
                    })
                }
            />
            <input
                type="number"
                placeholder="Number of Openings"
                value={jobsFormData.numberOfOpenings}
                className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                onChange={(e) =>
                    setJobsFormData({
                        ...jobsFormData,
                        numberOfOpenings: e.target.value
                    })
                }
            />
    </div>
  );
}

export default JobForm;