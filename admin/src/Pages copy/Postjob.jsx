import axios from 'axios';
import React, { useState } from 'react';

// Main Component: The Form for posting a job
export default function PostJob() {
    // A single state object to hold all form data, matching your model.
    const [formData, setFormData] = useState({
        title: 'Programming', // Default value from your enum
        company: '',
        logo: '',
        location: '',
        level: '',
        description: '',
        category: '' // This will be the free-text job title
    });
const url ="http://localhost:5000"
    // A single handler function to update the state for any input change.
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        // Here you would send the formData to your backend API
        const response = await axios.post(`${url}/api/job/company`,formData)
        console.log("Submitting Job Data:", formData);
        alert("Job data submitted! Check the console for the data object.");
    };

    // Options for the dropdowns based on your schema
    const titleOptions = ['Programming', 'DataScience', 'Designing', 'Networking', 'Management', 'Marketing', 'Cybersecurity'];
    
    return (
        <div className="bg-gray-900 min-h-screen p-4 sm:p-8 text-white font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Post a New Job</h1>
                    <p className="mt-4 text-lg text-gray-400">Fill out the details below to find your next great hire.</p>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-x-12">
                    {/* Left side: The Form */}
                    <div className="w-full lg:w-3/5 flex-shrink-0 mb-12 lg:mb-0">
                        <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 border border-gray-700 rounded-xl p-6 sm:p-8">
                            
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
                                <input type="text" name="company" id="company" value={formData.company} onChange={handleInputChange} className="block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3" required />
                            </div>

                            <div>
                                <label htmlFor="logo" className="block text-sm font-medium text-gray-300 mb-1">Company Logo URL</label>
                                <input type="url" name="logo" id="logo" value={formData.logo} onChange={handleInputChange} className="block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3" placeholder="https://example.com/logo.png" required />
                            </div>
                            
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">Job Field / Category</label>
                                <select name="title" id="title" value={formData.title} onChange={handleInputChange} className="block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3" required>
                                    {titleOptions.map(option => <option key={option} value={option}>{option}</option>)}
                                </select>
                            </div>

                            <div>
                                 <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">Job Title</label>
                                 <input type="text" name="category" id="category" value={formData.category} onChange={handleInputChange} className="block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3" placeholder="e.g., Senior React Developer" required />
                                 <p className="mt-2 text-xs text-gray-500">Note: Your schema has 'title' as the category list and 'category' as a string. We're using 'category' for the specific job title here.</p>
                            </div>

                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">Location</label>
                                <input type="text" name="location" id="location" value={formData.location} onChange={handleInputChange} className="block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3" placeholder="e.g., Amritsar, Punjab" required />
                            </div>

                            <div>
                                <label htmlFor="level" className="block text-sm font-medium text-gray-300 mb-1">Experience Level</label>
                                <input type="text" name="level" id="level" value={formData.level} onChange={handleInputChange} className="block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3" placeholder="e.g., Senior, 5+ years" required />
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Job Description</label>
                                <textarea name="description" id="description" rows="6" value={formData.description} onChange={handleInputChange} className="block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3" required></textarea>
                            </div>

                            <div className="pt-5">
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                                    Post Job Opening
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right side: The Live Preview */}
                    {/* <div className="w-full lg:w-2/5 lg:sticky lg:top-8">
                        <h3 className="text-lg font-medium leading-6 text-white mb-4">Live Preview</h3>
                        <JobPreviewCard formData={formData} />
                    </div> */}
                </div>
            </div>
        </div>
    );
}
