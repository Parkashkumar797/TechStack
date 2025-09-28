import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // for navigation on Edit

export default function AdminManageCompany() {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Fetch companies from API
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/company/companyProfile"
        );
        setCompanies(Array.isArray(res.data) ? res.data : res.data.companies || []);
      } catch (error) {
        console.error("Error fetching companies:", error.message);
        setCompanies([]);
      }
    };
    fetchCompanies();
  }, []);

  // Filter companies for search
  const filteredCompanies = Array.isArray(companies)
    ? companies.filter((company) =>
        company.companyName.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  // Edit button handler
  const handleEdit = (id) => {
    navigate(`/admin/company/edit/${id}`); // navigate to edit page
  };

  // Delete button handler
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this company?")) {
      try {
        await axios.delete(`http://localhost:5000/api/company/${id}`);
        // Update UI after deletion
        setCompanies(companies.filter((c) => c._id !== id));
      } catch (error) {
        console.error("Delete failed:", error.message);
      }
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse text-center">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4">Company Name</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Logo</th>
              <th className="py-3 px-4">Website</th>
              <th className="py-3 px-4">Created At</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-50">
            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((company) => (
                <tr
                  key={company._id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="py-3 px-4 font-semibold">{company.companyName}</td>
                  <td className="py-3 px-4 text-gray-700">{company.description}</td>
                  <td className="py-3 px-4">
                    {company.logoUrl ? (
                      <img
                        src={company.logoUrl}
                        alt="Logo"
                        className="h-10 mx-auto rounded"
                      />
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="py-3 px-4 text-blue-600 underline">
                    {company.website ? (
                      <a href={company.website} target="_blank" rel="noreferrer">
                        {company.website}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {company.createdAt
                      ? new Date(company.createdAt).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td className="py-3 px-4 flex justify-center gap-2">
 <button
  onClick={() => navigate(`/admin/company/edit/${company._id}`)}
  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
>
  Edit
</button>

                    <button
                      onClick={() => handleDelete(company._id)}
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
                  No companies found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
