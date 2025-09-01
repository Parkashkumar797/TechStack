import axios from 'axios';
import React, { useState } from 'react';

export default function CompanyRegister() {
    // State object to hold all form data, matching your schema.
    const [formData, setFormData] = useState({
        companyName: '',
        description: '',
        logoUrl: '',
        website: ''
    });
const url="http://localhost:5000"
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        const response = await axios.post(`${url}/api/company/register`,formData)
        console.log(response.data);
        
        console.log("Submitting Company Data:", formData);
        alert("Company registered succesfuuly");
    };

    return (
        <div className="bg-gray-900 min-h-screen p-4 sm:p-8 text-white font-sans antialiased">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Create Your Company Profile</h1>
                    <p className="mt-4 text-lg text-gray-400">
                        Establish your presence on Talent Stack and start attracting top talent today.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-x-12">

                    <div className="w-full lg:w-3/5 flex-shrink-0">
                        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 sm:p-8">
                            <h2 className="text-2xl font-semibold mb-6">Company Details</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-1">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        id="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        className="block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-1">
                                        Company Website
                                    </label>
                                    <input
                                        type="url"
                                        name="website"
                                        id="website"
                                        value={formData.website}
                                        onChange={handleInputChange}
                                        className="block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                                        placeholder="https://www.example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="logoUrl" className="block text-sm font-medium text-gray-300 mb-1">
                                        Logo URL
                                    </label>
                                    <input
                                        type="url"
                                        name="logoUrl"
                                        id="logoUrl"
                                        value={formData.logoUrl}
                                        onChange={handleInputChange}
                                        className="block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                                        placeholder="https://www.example.com/logo.png"
                                    />
                                    <p className="mt-2 text-xs text-gray-500">A default logo will be used if left blank.</p>
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                                        Company Description
                                    </label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        rows="6"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        className="block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                                        maxLength="2000"
                                        required
                                    ></textarea>
                                </div>

                                <div className="pt-5">
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                                    >
                                        Create Profile & Continue
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="h-12 lg:hidden"></div>

                    {/* <div className="w-full lg:w-2/5 lg:sticky lg:top-8">
                        <h3 className="text-lg font-medium leading-6 text-white mb-4">Live Profile Preview</h3>
                        <CompanyPreviewCard formData={formData} />
                    </div> */}
                </div>
            </div>
        </div>
    );
}
