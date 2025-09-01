import React, { useState } from "react";

const Icons = {
  dashboard: "📊",
  users: "👥",
  companies: "🏢",
  jobs: "💼",
  settings: "⚙️",
  logout: "🚪",
  menu: "☰",
  close: "✖",
};

const NavItem = ({ icon, label, active, link }) => (
  <a
    href={link || "#"}
    className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 
      ${active ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
  >
    <span className="text-lg">{icon}</span>
    <span>{label}</span>
  </a>
);

export default function Adminpage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 flex flex-col justify-between`}
      >
        {/* Top Section */}
        <div>
          {/* Logo */}
          <div className="flex items-center justify-center h-16 border-b border-gray-700">
            <h1 className="text-xl font-bold">Talent Stack</h1>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-2">
            <NavItem icon={Icons.dashboard} label="Dashboard" active />
            <NavItem icon={Icons.users} label="Users" link="/admin/users" />
            <NavItem icon={Icons.companies} label="Companies" link="/admin/companies" />
            <NavItem icon={Icons.jobs} label="Jobs" />
            <NavItem icon={Icons.settings} label="Settings" />
          </nav>
        </div>

        {/* Bottom Section (Profile + Logout) */}
        <div className="border-t border-gray-700 p-4">
          <div className="flex items-center mb-3">
            <img
              className="w-10 h-10 rounded-full mr-3"
              src="https://placehold.co/100x100"
              alt="Admin"
            />
            <div>
              <p className="font-semibold">Admin User</p>
              <p className="text-sm text-gray-400">admin@example.com</p>
            </div>
          </div>
          <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
            {Icons.logout} Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
          <h1 className="text-xl font-bold">Talent Stack</h1>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? Icons.close : Icons.menu}
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p>Welcome to the Admin Panel!</p>
          </div>
        </main>
      </div>
    </div>
  );
}
