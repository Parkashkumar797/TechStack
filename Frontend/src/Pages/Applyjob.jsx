import React from 'react'
import { useState } from 'react';
import { FiBriefcase } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi2";
import axios from "axios";

const Applyjob = () => {
  const [resume, setResume] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const url = "http://localhost:5000"
  const [data, setData] = useState({
    name: "",
    email: "",
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
    setSelectedFileName(file ? file.name : "");
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("email", data.email)
    formData.append("resume",resume)
    // console.log(data.file);
    const response = await axios.post(`${url}/api/job/apply-job`, formData)
    console.log(response);
    
    if (response.data.success) {
      alert("product added successfully ")
      // setData({
      //   name:"",
      //   email:"",
      // })
      // setResume(false)
    }
    else {
      alert("error")
    }
  }

  return (
    <div className="min-h-screen bg-blue-800 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Apply for Job</h1>
          <div className="flex justify-center">
            <FiBriefcase size={40} color="#8b5cf6" />
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-white font-medium mb-2">Full Name</label>
            <div className="bg-white rounded-xl p-4">
              <input
                className="w-full border-none outline-none bg-transparent text-gray-900 placeholder-gray-500"
                type="text"
                value={data.name}
                onChange={handleChange}
                name='name'
                placeholder='Full Name'
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-white font-medium mb-2">Email</label>
            <div className="bg-white rounded-xl p-4">
              <input
                className="w-full border-none outline-none bg-transparent text-gray-900 placeholder-gray-500"
                type="email"
                value={data.email}
                onChange={handleChange}
                name='email'
                placeholder='abc@example.com'
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-white font-medium mb-2">Resume</label>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="flex-1 flex items-center gap-2">
                  <HiOutlineDocumentText className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600 text-sm">
                    {selectedFileName || "resume.pdf"}
                  </span>
                </div>
                <label className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg cursor-pointer transition-colors text-sm">
                  Upload
                  <input
                    type="file"
                    onChange={handleFileChange}
                    name='resume'
                    className="hidden"
                   
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-colors text-lg mt-8"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  )
}
export default Applyjob;