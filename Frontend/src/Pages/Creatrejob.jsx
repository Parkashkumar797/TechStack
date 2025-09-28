import React, { useState, useEffect } from "react";
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

  // State to handle success/error notifications
  const [notification, setNotification] = useState({ message: '', type: '' });

  const url = "http://localhost:5000/api/job/company";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Effect to clear the notification after 3 seconds
  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => {
        setNotification({ message: '', type: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, formData);
      console.log("Created successfully", formData);
      setNotification({ message: 'Job created successfully!', type: 'success' });
      // Reset the form after successful submission
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
      setNotification({ message: 'Failed to create job. Please try again.', type: 'error' });
    }
  };

  // Define base styles for inputs to keep the code clean
  const inputStyle = "w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition placeholder-gray-400 text-gray-800";
  
  return (
    // Changed to a light background to match your site's theme
    <div className="bg-slate-50 min-h-screen text-gray-800 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">
          Post a New Job Opening
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Notification Message Area */}
          {notification.message && (
            <div className={`p-4 rounded-lg text-center font-medium ${notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {notification.message}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Logo URL */}
            <div>
              <label className="block mb-2 font-semibold">Logo URL</label>
              <input
                type="text"
                name="logo"
                value={formData.logo}
                onChange={handleChange}
                className={inputStyle}
                placeholder="https://example.com/logo.png"
              />
            </div>

            {/* Job Title */}
            <div>
              <label className="block mb-2 font-semibold">Job Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={inputStyle}
                placeholder="e.g., Senior React Developer"
                required
              />
            </div>

            {/* Job Level */}
            <div>
              <label className="block mb-2 font-semibold">Job Level</label>
              <input
                type="text"
                name="level"
                value={formData.level}
                onChange={handleChange}
                className={inputStyle}
                placeholder="e.g., Intern, Junior, Senior"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block mb-2 font-semibold">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName} // <-- BUG FIX: Was formData.company
                onChange={handleChange}
                className={inputStyle}
                placeholder="Enter company name"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block mb-2 font-semibold">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={inputStyle}
                placeholder="e.g., Bangalore, Remote"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-2 font-semibold">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={inputStyle}
                placeholder="e.g., Web Development"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-semibold">Job Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="6"
              className={inputStyle}
              placeholder="Write the job responsibilities, requirements, and benefits here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
