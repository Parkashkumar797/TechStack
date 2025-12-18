import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CompanyHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link to="/company/dashboard" className="text-2xl font-bold text-blue-400">
          TalentStack Recruiter
        </Link>

        <nav className="space-x-6">
          <Link
            to="/company/dashboard"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Dashboard
          </Link>
          <Link
            to="/company/jobs"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            My Jobs
          </Link>
          <Link
            to="/company/create-job"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Post Job
          </Link>
          <Link
            to="/company/profile"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default CompanyHeader;
