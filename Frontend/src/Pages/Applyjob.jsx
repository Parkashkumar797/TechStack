import React, { useState, useEffect } from "react";
import { FiBriefcase } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi2";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Applyjob = () => {
  const [resume, setResume] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [data, setData] = useState({ name: "", email: "" });

  const { id } = useParams(); // jobId
  const navigate = useNavigate();
  const url = "http://localhost:5000";

  // 🔐 SAFE AUTH HELPER
  const getAuth = () => {
    const token = sessionStorage.getItem("token");

    let user = null;
    const userRaw = sessionStorage.getItem("user");
    if (userRaw) {
      user = JSON.parse(userRaw);
    }

    return { token, user };
  };

  // 🔒 LOGIN GUARD
  useEffect(() => {
    const { token } = getAuth();
    if (!token) {
      alert("Please login first");
      navigate("/login");
    }
  }, [navigate]);

  // INPUT HANDLERS
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
    setSelectedFileName(file ? file.name : "");
  };

  // 📤 SUBMIT APPLICATION
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { token, user } = getAuth();
    const userId = user?._id;

    if (!token || !userId) {
      alert("Please login again");
      navigate("/login");
      return;
    }

    if (!resume) {
      alert("Please upload your resume");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("resume", resume);
    formData.append("jobId", id);
    formData.append("userId", userId);

    try {
      const response = await axios.post(
        `${url}/api/job/apply-job`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        alert("Application submitted successfully!");
        setData({ name: "", email: "" });
        setResume(null);
        setSelectedFileName("");
        navigate("/applications");
      } else {
        alert(response.data.message || "Error applying for job");
      }
    } catch (err) {
      console.error(err);
      alert("Server error while applying for job");
    }
  };

  return (
    <div className="min-h-screen bg-blue-800 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md mx-auto">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Apply for Job
          </h1>
          <div className="flex justify-center">
            <FiBriefcase size={40} color="#f97316" />
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-6"
        >
          {/* NAME */}
          <div>
            <label className="block text-white font-medium mb-2">
              Full Name
            </label>
            <div className="bg-white rounded-xl p-4">
              <input
                className="w-full outline-none bg-transparent text-gray-900"
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-white font-medium mb-2">Email</label>
            <div className="bg-white rounded-xl p-4">
              <input
                className="w-full outline-none bg-transparent text-gray-900"
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="abc@example.com"
                required
              />
            </div>
          </div>

          {/* RESUME */}
          <div>
            <label className="block text-white font-medium mb-2">
              Resume
            </label>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="flex-1 flex items-center gap-2">
                  <HiOutlineDocumentText className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600 text-sm">
                    {selectedFileName || "resume.pdf"}
                  </span>
                </div>
                <label className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg cursor-pointer text-sm">
                  Upload
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    required
                  />
                </label>
              </div>
            </div>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-lg"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Applyjob;
