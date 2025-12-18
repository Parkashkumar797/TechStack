import React, { useEffect, useState } from "react";
import axios from "axios";

const CompanyProfile = () => {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/company/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCompany(res.data.company);
      } catch (error) {
        console.error("Error fetching company:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCompany();
  }, [token]);

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:5000/api/company/update", company, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  if (!company) return <p className="text-center mt-10 text-red-500">Company not found.</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Company Profile</h2>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={company.name}
          onChange={handleChange}
          placeholder="Company Name"
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          name="email"
          value={company.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          name="website"
          value={company.website}
          onChange={handleChange}
          placeholder="Website"
          className="border p-2 w-full rounded"
        />
        <textarea
          name="description"
          value={company.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 w-full rounded"
        />

        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default CompanyProfile;
