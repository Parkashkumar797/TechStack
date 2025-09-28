// src/pages/CompanyDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CompanyDetail() {
  const { id } = useParams(); // get company ID from URL
  const navigate = useNavigate();

  const [company, setCompany] = useState({
    companyName: "",
    website: "",
    description: "",
    logoUrl: "",
    createdAt: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Fetch company data
  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/company/${id}`);
        const data = res.data;
        setCompany({
          companyName: data.companyName || "",
          website: data.website || "",
          description: data.description || "",
          logoUrl: data.logoUrl || "",
          createdAt: data.createdAt ? new Date(data.createdAt).toISOString().slice(0, 10) : "",
        });
      } catch (err) {
        console.error("Error fetching company:", err.message);
        alert("Company not found");
        navigate("/admin/companies");
      } finally {
        setLoading(false);
      }
    };
    fetchCompany();
  }, [id, navigate]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany((prev) => ({ ...prev, [name]: value }));
  };

  // Update company
  const handleUpdate = async () => {
    setSaving(true);
    try {
      const res = await axios.put(`http://localhost:5000/api/company/${id}`, {
        companyName: company.companyName,
        website: company.website,
        description: company.description,
        logoUrl: company.logoUrl,
      });
      if (res.data.success) {
        alert("Company updated successfully");
        navigate("/admin/companies");
      } else {
        alert(res.data.message || "Update failed");
      }
    } catch (err) {
      console.error("Error updating company:", err.message);
      alert("Error updating company");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading company...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-xl mt-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Edit Company</h2>

      {/* Logo Preview */}
      <div className="flex flex-col md:flex-row items-center mb-6 gap-6">
        <img
          src={company.logoUrl || "https://via.placeholder.com/120"}
          alt="Company Logo"
          className="h-28 w-28 object-contain rounded-lg border border-gray-200 shadow-sm"
        />
        <input
          type="text"
          name="logoUrl"
          value={company.logoUrl}
          onChange={handleChange}
          placeholder="Logo URL"
          className="border border-gray-300 rounded-lg p-2 w-full md:w-1/2"
        />
      </div>

      {/* Company Name */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700 mb-1">Company Name:</label>
        <input
          type="text"
          name="companyName"
          value={company.companyName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>

      {/* Website */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700 mb-1">Website:</label>
        <input
          type="text"
          name="website"
          value={company.website}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700 mb-1">Description:</label>
        <textarea
          name="description"
          value={company.description}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
          rows={4}
        />
      </div>

      {/* Created At - read only */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700 mb-1">Created At:</label>
        <input
          type="text"
          value={company.createdAt}
          readOnly
          className="w-full border border-gray-200 rounded-lg p-2 bg-gray-100 text-gray-600"
        />
      </div>

      <div className="flex justify-end mt-6 gap-3">
        <button
          onClick={() => navigate("/admin/companies")}
          className="px-5 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition"
        >
          Cancel
        </button>
        <button
          onClick={handleUpdate}
          disabled={saving}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition disabled:opacity-50"
        >
          {saving ? "Saving..." : "Update"}
        </button>
      </div>
    </div>
  );
}
