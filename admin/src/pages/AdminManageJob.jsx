// pages/AdminManageJobs.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminManageJobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/job/jobs"); // backend API
        console.log("Jobs fetched:", res.data);
        setJobs(res.data);
      } catch (err) {
        console.error("Error fetching jobs:", err.message);
      }
    };
    fetchJobs();
  }, []);

  // Filter jobs based on search input
  const filteredJobs = jobs.filter(
    (job) =>
      job.title?.toLowerCase().includes(search.toLowerCase()) ||
      job.companyName?.toLowerCase().includes(search.toLowerCase()) ||
      job.location?.toLowerCase().includes(search.toLowerCase())
  );

  // Navigate to edit page
  const handleEdit = (id) => {
    navigate(`/admin/job/edit/${id}`);
  };

  // Delete job
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/job/${id}`);
      setJobs(jobs.filter((j) => j._id !== id));
      alert("Job deleted successfully!");
    } catch (err) {
      console.error("Delete failed:", err.message);
      alert("Failed to delete job!");
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Search */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Job, Company or Location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Jobs Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse text-center">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4">Job Title</th>
              <th className="py-3 px-4">Company</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Level</th>
              <th className="py-3 px-4">Posted On</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-50">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <tr
                  key={job._id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="py-3 px-4 font-semibold">{job.title}</td>
                  <td className="py-3 px-4">{job.companyName}</td>
                  <td className="py-3 px-4">{job.location || "N/A"}</td>
                  <td className="py-3 px-4">{job.level || "N/A"}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {job.createdAt
                      ? new Date(job.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "N/A"}
                  </td>
                  <td className="py-3 px-4 flex justify-center gap-2">
                    <button
                      onClick={() => handleEdit(job._id)}
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(job._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 text-gray-500">
                  No jobs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
