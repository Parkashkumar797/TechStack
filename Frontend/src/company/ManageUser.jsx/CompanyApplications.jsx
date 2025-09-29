// src/company/ManageUser.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CompanyApplication() {
  const [applications, setApplications] = useState([]);
  const companyId = localStorage.getItem("companyId"); // ✅ Get logged-in companyId

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        if (!companyId) return; // no company logged in
        const res = await axios.get(
          `http://localhost:5000/api/company/${companyId}/applications`
        );
        setApplications(res.data.applicants || []);
      } catch (error) {
        console.error("Error fetching applications:", error.message);
      }
    };

    fetchApplications();
  }, [companyId]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-center mb-4">
        Applications for Your Jobs
      </h2>

      <table className="min-w-full border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-2">Applicant Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Applied At</th>
          </tr>
        </thead>
        <tbody>
          {applications.length > 0 ? (
            applications.map((app, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{app.name}</td>
                <td className="px-4 py-2">{app.email}</td>
                <td className="px-4 py-2">
                  {new Date(app.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                className="px-4 py-4 text-center text-gray-500"
              >
                No applications found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
