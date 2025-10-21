import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CompanyDashboard() {
  const [companyProfile, setCompanyProfile] = useState(null);
  const [myJobs, setMyJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = sessionStorage.getItem("token");
        if (!token) return navigate("/login"); // redirect if not logged in

        // 1️⃣ Fetch company profile of logged-in recruiter
        const profileRes = await axios.get(
          "http://localhost:5000/api/company/profile/me",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!profileRes.data.success) {
          // If no company, redirect to create company profile page
          return navigate("/create-company");
        }

        setCompanyProfile(profileRes.data.company);

        // 2️⃣ Fetch jobs created by this company
        const jobsRes = await axios.get(
          `http://localhost:5000/api/job/my-jobs`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setMyJobs(jobsRes.data.jobs || []);
        setLoading(false);
      } catch (error) {
        console.error(
          "Error loading dashboard:",
          error.response?.data || error
        );
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  if (loading) return <div className="p-6 text-center">Loading dashboard...</div>;

  if (!companyProfile)
    return (
      <div className="p-6 text-center text-red-600">
        No company profile found. Please create one.
      </div>
    );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Company Dashboard</h2>

      {/* Company Profile */}
      <div className="bg-gray-100 rounded-lg p-4 mb-6 shadow">
        <h3 className="text-2xl font-semibold mb-2">{companyProfile.name}</h3>
        <p><strong>Email:</strong> {companyProfile.email}</p>
        <p><strong>Website:</strong> {companyProfile.website || "N/A"}</p>
        <p><strong>Description:</strong> {companyProfile.description || "No description"}</p>
      </div>

      {/* My Jobs Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-3">My Jobs</h3>
        {myJobs.length > 0 ? (
          <ul className="space-y-3">
            {myJobs.map((job) => (
              <li key={job._id} className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-xl font-semibold">{job.title}</h4>
                <p><strong>Level:</strong> {job.level}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Description:</strong> {job.description}</p>
                <p><strong>Created By:</strong> {job.companyEmail}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No jobs created yet.</p>
        )}
      </div>
    </div>
  );
}

export default CompanyDashboard;
