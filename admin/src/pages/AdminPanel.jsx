import React, { useState, useEffect } from 'react'
import axios from 'axios'

const categories = ['Programming', 'DataScience', 'Designing', 'Networking', 'Management', 'Marketing', 'Cybersecurity']

const AdminPanel = () => {
  const [jobs, setJobs] = useState([])
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    logo: '',
    location: '',
    level: '',
    description: '',
    category: ''
  })

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/companies')
      setJobs(res.data)
    } catch (err) {
      console.error('Error fetching jobs:', err)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/api/companies', formData)
      setFormData({ title: '', company: '', logo: '', location: '', level: '', description: '', category: '' })
      fetchJobs()
    } catch (err) {
      console.error('Error adding job:', err)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/companies/${id}`)
      fetchJobs()
    } catch (err) {
      console.error('Error deleting job:', err)
    }
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Job Panel</h1>

      {/* Form to Add Job */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 shadow-md rounded mb-8">
        <input name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} className="border p-2 rounded" required />
        <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} className="border p-2 rounded" required />
        <input name="logo" placeholder="Logo URL" value={formData.logo} onChange={handleChange} className="border p-2 rounded" required />
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="border p-2 rounded" required />
        <input name="level" placeholder="Level (e.g. Entry, Senior)" value={formData.level} onChange={handleChange} className="border p-2 rounded" required />
        <select name="category" value={formData.category} onChange={handleChange} className="border p-2 rounded" required>
          <option value="">Select Category</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="border p-2 rounded col-span-full" rows="3" required />
        <button type="submit" className="col-span-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Job</button>
      </form>

      {/* List of Jobs */}
      <h2 className="text-xl font-semibold mb-4">Current Job Posts</h2>
      <div className="grid gap-4">
        {jobs.map((job) => (
          <div key={job._id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <h3 className="font-bold">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
              <p className="text-sm text-gray-500">{job.category} | {job.level}</p>
            </div>
            <button onClick={() => handleDelete(job._id)} className="text-red-600 hover:underline text-sm">Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminPanel
