import React, { useEffect, useState } from "react";
import axios from "axios";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/job/my-jobs", { headers: { Authorization: `Bearer ${token}` } });
        setJobs(res.data.jobs);
      } catch (err) {
        console.error("Error fetching jobs:", err.response?.data || err.message);
      }
    };
    fetch();
  }, [token]);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">My Jobs</h2>
      {jobs.length === 0 ? <p>No jobs created yet.</p> :
        jobs.map(job=>(
          <div key={job._id} className="p-4 mb-3 bg-white rounded shadow">
            <h3 className="font-semibold">{job.title}</h3>
            <p className="text-sm">{job.location} • {job.level}</p>
            <p className="text-xs text-gray-500">Posted: {new Date(job.createdAt).toLocaleDateString()}</p>
          </div>
        ))
      }
    </div>
  );
};

export default MyJobs;
