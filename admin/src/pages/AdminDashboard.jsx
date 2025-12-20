import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const COLORS = ["#2563eb", "#16a34a", "#9333ea"];

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    jobs: 0,
    users: 0,
    companies: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [jobsRes, usersRes, companiesRes] = await Promise.all([
        axios.get("http://localhost:5000/api/admin/jobs"),
        axios.get("http://localhost:5000/api/admin/users"),
        axios.get("http://localhost:5000/api/admin/companies"),
      ]);

      setStats({
        jobs: jobsRes.data.length,
        users: usersRes.data.length,
        companies: companiesRes.data.length,
      });
    } catch (err) {
      console.error("Error fetching stats:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center p-6">Loading stats...</p>;

  // 📊 Chart data
  const chartData = [
    { name: "Jobs", value: stats.jobs },
    { name: "Users", value: stats.users },
    { name: "Companies", value: stats.companies },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-md text-center">
          <h2>Total Jobs</h2>
          <p className="text-4xl font-bold">{stats.jobs}</p>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-2xl shadow-md text-center">
          <h2>Total Users</h2>
          <p className="text-4xl font-bold">{stats.users}</p>
        </div>

        <div className="bg-purple-600 text-white p-6 rounded-2xl shadow-md text-center">
          <h2>Total Companies</h2>
          <p className="text-4xl font-bold">{stats.companies}</p>
        </div>
      </div>

      {/* Graph Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Platform Overview (Bar Chart)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Data Distribution (Pie Chart)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
