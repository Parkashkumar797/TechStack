import axios from 'axios';
import React, { useState } from 'react';

export default function CompanyRegister() {
    const [formData, setFormData] = useState({
        companyName: '',
        description: '',
        logoUrl: '',
        website: ''
    });

    const url = "http://localhost:5000";

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/api/company/register`, formData);
            console.log(response.data);
            alert("Company registered successfully!");
        } catch (error) {
            console.error(error);
            alert("Error registering company.");
        }
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 sm:p-12">
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A]">
                        Create Your Company Profile
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Join TalentStack and attract top talent by showcasing your company.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="companyName"
                            id="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                            Company Website
                        </label>
                        <input
                            type="url"
                            name="website"
                            id="website"
                            value={formData.website}
                            onChange={handleInputChange}
                            placeholder="https://www.example.com"
                            className="w-full bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="logoUrl" className="block text-sm font-medium text-gray-700 mb-1">
                            Logo URL
                        </label>
                        <input
                            type="url"
                            name="logoUrl"
                            id="logoUrl"
                            value={formData.logoUrl}
                            onChange={handleInputChange}
                            placeholder="https://www.example.com/logo.png"
                            className="w-full bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <p className="mt-1 text-xs text-gray-500">A default logo will be used if left blank.</p>
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                            Company Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            rows="6"
                            value={formData.description}
                            onChange={handleInputChange}
                            maxLength="2000"
                            className="w-full bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
                    >
                        Create Profile & Continue
                    </button>
                </form>
            </div>
        </div>
    );
}
