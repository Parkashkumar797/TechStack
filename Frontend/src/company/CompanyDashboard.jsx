import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CompanyDashboard = () => {
  const [company, setCompany] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [companyRes, jobsRes] = await Promise.all([
          axios.get("http://localhost:5000/api/company/profile", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://localhost:5000/api/job/my-jobs", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        setCompany(companyRes.data.company);
        setJobs(jobsRes.data.jobs || []);
      } catch (error) {
        console.error("Error loading dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [token]);

  if (loading)
    return <p className="text-center mt-10 text-gray-500">Loading Dashboard...</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700">
            Welcome, {company?.name || "Company"}
          </h1>
          <Link
            to="/create-job"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            + Create New Job
          </Link>
        </div>

        {/* Company Info Card */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Company Profile</h2>
          <p><strong>Email:</strong> {company?.email}</p>
          <p><strong>Website:</strong> {company?.website || "Not added"}</p>
          <p><strong>Description:</strong> {company?.description || "No description provided"}</p>
          <Link
            to="/company-profile"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            Edit Profile →
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-xl shadow-md text-center">
            <h3 className="text-gray-500 text-sm">Total Jobs Posted</h3>
            <p className="text-3xl font-bold text-blue-700">{jobs.length}</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md text-center">
            <h3 className="text-gray-500 text-sm">Active Jobs</h3>
            <p className="text-3xl font-bold text-green-600">
              {jobs.filter((j) => j.status !== "closed").length}
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md text-center">
            <h3 className="text-gray-500 text-sm">Applications</h3>
            <p className="text-3xl font-bold text-purple-600">0</p>
          </div>
        </div>

        {/* Recent Jobs */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Recently Posted Jobs</h2>
          {jobs.length === 0 ? (
            <p className="text-gray-500">No jobs posted yet.</p>
          ) : (
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Title</th>
                  <th className="p-2">Location</th>
                  <th className="p-2">Level</th>
                  <th className="p-2">Created</th>
                </tr>
              </thead>
              <tbody>
                {jobs.slice(-5).reverse().map((job) => (
                  <tr key={job._id} className="border-b hover:bg-gray-50">
                    <td className="p-2 font-medium">{job.title}</td>
                    <td className="p-2">{job.location}</td>
                    <td className="p-2 capitalize">{job.level}</td>
                    <td className="p-2 text-gray-500">
                      {new Date(job.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
