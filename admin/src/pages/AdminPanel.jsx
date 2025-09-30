import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    jobs: 0,
    users: 0,
    companies: 0,
  });

  // Fetch stats from backend when component mounts
  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Fetch jobs
      const jobsRes = await axios.get("http://localhost:5000/api/jobs");
      // Fetch users
      const usersRes = await axios.get("http://localhost:5000/api/users");
      // Fetch companies
      const companiesRes = await axios.get("http://localhost:5000/api/companies");

      setStats({
        jobs: jobsRes.data.length,
        users: usersRes.data.length,
        companies: companiesRes.data.length,
      });
    } catch (err) {
      console.error("Error fetching stats:", err);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
          <h2 className="text-lg">Total Jobs</h2>
          <p className="text-4xl font-bold">{stats.jobs}</p>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
          <h2 className="text-lg">Total Users</h2>
          <p className="text-4xl font-bold">{stats.users}</p>
        </div>
        <div className="bg-purple-600 text-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
          <h2 className="text-lg">Total Companies</h2>
          <p className="text-4xl font-bold">{stats.companies}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
