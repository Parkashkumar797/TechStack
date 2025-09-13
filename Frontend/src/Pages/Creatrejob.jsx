import React, { useState } from "react";
import axios from "axios";

export default function CreateJob() {
  const [formData, setFormData] = useState({
    logo: "",
    title: "",
    level: "",
    companyName: "",
    location: "",
    category: "",
    description: "",
  });

  const url = "http://localhost:5000/api/job/company";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, formData);
      console.log("Created successfully", formData);
      alert("Job created successfully ✅");
      setFormData({
        logo: "",
        title: "",
        level: "",
        companyName: "",
        location: "",
        category: "",
        description: "",
      });
    } catch (err) {
      console.error("Error creating job:", err);
      alert("Failed to create job ❌");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-indigo-400">
          Create New Job
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Logo */}
          <div>
            <label className="block mb-1 font-medium">Logo URL</label>
            <input
              type="text"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter logo URL"
            />
          </div>

          {/* Job Title */}
          <div>
            <label className="block mb-1 font-medium">Job Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="e.g. Software Engineer"
            />
          </div>

          {/* Job Level */}
          <div>
            <label className="block mb-1 font-medium">Job Level</label>
            <input
              type="text"
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="e.g. Intern, Junior, Senior"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block mb-1 font-medium">CompanyName</label>
            <input
              type="text"
              name="companyName"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter company name"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="e.g. Bangalore, Remote"
            />
          </div>

          {/* Experience / Category */}
          <div>
            <label className="block mb-1 font-medium">Experience / Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="e.g. 2-3 Years / Web Development"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium">Job Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Write the job responsibilities and requirements here..."
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition"
            >
              Create Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
