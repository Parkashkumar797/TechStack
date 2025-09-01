import React from 'react';

const applications = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechNova',
    location: 'Bangalore',
    status: 'Pending',
    appliedDate: '2025-08-01',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    company: 'Designify',
    location: 'Mumbai',
    status: 'Shortlisted',
    appliedDate: '2025-08-03',
  },
  {
    id: 3,
    title: 'Marketing Manager',
    company: 'MarketPro',
    location: 'Remote',
    status: 'Rejected',
    appliedDate: '2025-08-02',
  },
];

const statusColor = {
  Pending: 'bg-yellow-100 text-yellow-800',
  Shortlisted: 'bg-green-100 text-green-800',
  Rejected: 'bg-red-100 text-red-800',
};

const Application = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A3A74] via-[#2172C1] to-[#4FB7F3] p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-semibold text-center text-[#0A3A74] mb-6">My Applications</h2>
        
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="p-3">Job Title</th>
              <th className="p-3">Company</th>
              <th className="p-3">Location</th>
              <th className="p-3">Applied Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="hover:bg-gray-100 transition">
                <td className="p-3 font-medium">{app.title}</td>
                <td className="p-3">{app.company}</td>
                <td className="p-3">{app.location}</td>
                <td className="p-3">{app.appliedDate}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[app.status]}`}>
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Application;
