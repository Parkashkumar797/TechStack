import React, { useEffect, useState } from "react";
import axios from "axios";

const statusColor = {
  Pending: "bg-yellow-100 text-yellow-800",
  Shortlisted: "bg-green-100 text-green-800",
  Rejected: "bg-red-100 text-red-800",
};

const Application = () => {
  const [applications, setApplications] = useState([]);
  const userId = localStorage.getItem("userId"); // logged-in user
  const url = "http://localhost:5000";

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        if (!userId) return;
        const res = await axios.get(`${url}/api/user/${userId}/profile`);
        if (res.data.success) {
          // Map appliedJobs to table format
          const apps = res.data.user.appliedJobs.map((job) => ({
            id: job._id,
            title: job.title,
            company: job.companyName || "N/A", // optional field
            location: job.location,
            appliedDate: new Date(job.createdAt).toLocaleDateString(),
            status: job.status || "Pending", // default status
          }));
          setApplications(apps);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchApplications();
  }, [userId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A3A74] via-[#2172C1] to-[#4FB7F3] p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-semibold text-center text-[#0A3A74] mb-6">
          My Applications
        </h2>

        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="p-3">Job Title</th>
              <th className="p-3">Company</th>
              <th className="p-3">Location</th>
              <th className="p-3">Applied Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-3 text-center text-gray-500">
                  You haven't applied to any jobs yet.
                </td>
              </tr>
            ) : (
              applications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-100 transition">
                  <td className="p-3 font-medium">{app.title}</td>
                  <td className="p-3">{app.company}</td>
                  <td className="p-3">{app.location}</td>
                  <td className="p-3">{app.appliedDate}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[app.status]}`}
                    >
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Application;
