import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminManageUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/users");
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="text-center p-6">Loading users...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Users</h1>

      {/* 🔍 Search Section */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="border rounded-l-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700">
          Search
        </button>
      </div>

      {/* 📋 Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 border text-gray-700">Name</th>
              <th className="px-6 py-3 border text-gray-700">Email</th>
              <th className="px-6 py-3 border text-gray-700">Role</th>
              <th className="px-6 py-3 border text-gray-700">Created At</th>
              <th className="px-6 py-3 border text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((u, index) => (
                <tr
                  key={u._id}
                  className={`text-center ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  <td className="px-6 py-3 border">{u.name}</td>
                  <td className="px-6 py-3 border">{u.email}</td>
                  <td className="px-6 py-3 border">{u.role}</td>
                  <td className="px-6 py-3 border">
                    {new Date(u.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-3 border space-x-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                      View
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
