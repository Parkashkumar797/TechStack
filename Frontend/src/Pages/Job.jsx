import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

export default function Job() {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedLocations, setSelectedLocations] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])
  const [jobs, setJobs] = useState([])

  // Sample job data based on the image description
  const jobData = [
    {
      id: 1,
      title: "Cloud Engineer",
      company: "Microsoft",
      logo: assets.microsoft_logo,
      location: "Hyderabad",
      level: "Intermediate Level",
      description: "We are seeking a skilled Cloud Engineer to design, implement, and maintain cloud infrastructure solutions. You will work with cutting-edge technologies to ensure optimal performance and scalability.",
      category: "Programming"
    },
    {
      id: 2,
      title: "Network Security Engineer",
      company: "Microsoft",
      logo: assets.microsoft_logo,
      location: "Bangalore",
      level: "Senior Level",
      description: "Join our security team to protect our network infrastructure. You will implement security measures, monitor threats, and ensure compliance with industry standards.",
      category: "Cybersecurity"
    },
    {
      id: 3,
      title: "Software Tester",
      company: "Amazon",
      logo: assets.amazon_logo,
      location: "Chennai",
      level: "Intermediate Level",
      description: "Ensure software quality through comprehensive testing. You will develop test plans, execute test cases, and collaborate with development teams to deliver high-quality products.",
      category: "Programming"
    },
    {
      id: 4,
      title: "Graphic Designer",
      company: "Adobe",
      logo: assets.adobe_logo,
      location: "Chennai",
      level: "Intermediate Level",
      description: "Create compelling visual designs that communicate brand messages effectively. You will work on various design projects including branding, marketing materials, and digital assets.",
      category: "Designing"
    },
    {
      id: 5,
      title: "Content Marketing Manager",
      company: "Samsung",
      logo: assets.samsung_logo,
      location: "Mumbai",
      level: "Senior Level",
      description: "Develop and execute content marketing strategies to drive brand awareness and engagement. You will create compelling content across multiple channels and platforms.",
      category: "Marketing"
    },
    {
      id: 6,
      title: "Human Resources Specialist",
      company: "Walmart",
      logo: assets.walmart_logo,
      location: "Washington",
      level: "Intermediate Level",
      description: "Support HR operations including recruitment, employee relations, and policy implementation. You will ensure compliance with labor laws and maintain positive workplace culture.",
      category: "Management"
    }
  ]

  const categories = ["Programming", "Data Science", "Designing", "Networking", "Management", "Marketing", "Cybersecurity"]
  const locations = ["Bangalore", "Washington", "Hyderabad", "Mumbai", "California", "Chennai", "New York"]

  const companyLogos = [
    { name: "Microsoft", logo: assets.microsoft_logo },
    { name: "Walmart", logo: assets.walmart_logo },
    { name: "Accenture", logo: assets.accenture_logo },
    { name: "Samsung", logo: assets.samsung_logo },
    { name: "Amazon", logo: assets.amazon_logo },
    { name: "Adobe", logo: assets.adobe_logo }
  ]

  useEffect(() => {
    setJobs(jobData)
    setFilteredJobs(jobData)
  }, [])

  useEffect(() => {
    let filtered = jobData

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(job => selectedCategories.includes(job.category))
    }

    if (selectedLocations.length > 0) {
      filtered = filtered.filter(job => selectedLocations.includes(job.location))
    }

    setFilteredJobs(filtered)
  }, [selectedCategories, selectedLocations])

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const handleLocationChange = (location) => {
    setSelectedLocations(prev => 
      prev.includes(location) 
        ? prev.filter(l => l !== location)
        : [...prev, location]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedLocations([])
  }

  return (
    <div className="min-h-screen bg-[#ffff0]">
      {/* Header with Company Logos */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center space-x-8">
            <span className="text-gray-600 font-medium">Trusted by</span>
            <div className="flex items-center space-x-6">
              {companyLogos.map((company, index) => (
                <img
                  key={index}
                  src={company.logo}
                  alt={company.name}
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                {(selectedCategories.length > 0 || selectedLocations.length > 0) && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Categories Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Search by Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Locations Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Search by Location</h4>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <label key={location} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedLocations.includes(location)}
                        onChange={() => handleLocationChange(location)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{location}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Job Listings */}
          <div className="lg:w-3/4">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Latest jobs</h1>
              <p className="text-gray-600">Get your desired job from top companies</p>
            </div>

            {filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No jobs found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-blue-600 hover:text-blue-800"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                  <div key={job.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                    {/* Company Logo */}
                    <div className="flex items-center mb-4">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-10 h-10 rounded-full object-contain"
                      />
                    </div>

                    {/* Job Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{job.title}</h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                        {job.level}
                      </span>
                    </div>

                    {/* Job Description */}
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                      {job.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        to={`/apply-job/${job.id}`}
                        className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Apply now
                      </Link>
                      <Link
                        to={`/job/${job.id}`}
                        className="flex-1 border border-blue-600 text-blue-600 text-center py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
