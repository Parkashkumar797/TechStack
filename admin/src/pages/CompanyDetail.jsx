// src/pages/admin/CompanyDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CompanyDetail() {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  const url = "http://localhost:5000";

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await axios.get(`${url}/api/company/${id}`);
        setCompany(res.data);
      } catch (error) {
        console.error("Error fetching company:", error.message);
      }
    };
    fetchCompany();
  }, [id]);

  if (!company) return <p className="p-6">Loading company details...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{company.companyName}</h2>
      <img
        src={company.logoUrl || "https://via.placeholder.com/150"}
        alt="Logo"
        className="h-20 mb-4"
      />
      <p className="mb-2">
        <strong>Website:</strong>{" "}
        <a href={company.website} target="_blank" rel="noreferrer" className="text-blue-600 underline">
          {company.website}
        </a>
      </p>
      <p className="mb-2">
        <strong>Description:</strong> {company.description}
      </p>
      <p className="text-sm text-gray-500">
        Created At: {new Date(company.createdAt).toLocaleString()}
      </p>
    </div>
  );
}
