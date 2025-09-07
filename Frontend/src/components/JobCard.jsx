import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  // Check login and navigate
  const handleApply = () => {
    const token = localStorage.getItem("token"); // check if user logged in
    if (!token) {
      alert("Please login first to apply for a job.");
      navigate("/login"); // redirect to login page
    } else {
      navigate(`/apply-job/${job._id}`);
      scrollTo(0, 0);
    }
  };

  const handleLearnMore = () => {
    navigate(`/apply-job/${job._id}`);
    scrollTo(0, 0);
  };

  return (
    <div className="border rounded p-6 shadow-md">
      <div className="flex justify-between items-center">
        <img className="h-8" src={assets.company_icon} alt="" />
      </div>

      <h4 className="font-medium text-xl mt-2">{job.title}</h4>

      <div className="flex items-center gap-3 mt-2 text-xs">
        <span className="bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
          {job.location}
        </span>
        <span className="bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
          {job.level}
        </span>
      </div>

      <p className="text-gray-500 text-sm mt-4">
        {job.description
          ? job.description.slice(0, 150)
          : "No description available"}
      </p>

      <div className="mt-4 flex gap-4 text-sm">
        <button
          onClick={handleApply}
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Apply Now
        </button>
        <button
          onClick={handleLearnMore}
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default JobCard;
