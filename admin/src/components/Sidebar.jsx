// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";

export default function Sidebar({ onLogout }) {
  const linkClass =
    "block px-4 py-3 rounded text-base font-medium hover:bg-blue-600 hover:text-white transition";

  return (
    <aside className="w-64 bg-gray-900 text-gray-100 flex flex-col justify-between min-h-screen">
      {/* Top Section */}
      <div>
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          Admin Panel
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <NavLink to="/" className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/admin/users" className={linkClass}>
            Manage Users
          </NavLink>
          <NavLink to="/admin/companies" className={linkClass}>
            Manage Companies
          </NavLink>
          <NavLink to="/admin/jobs" className={linkClass}>
            Manage Jobs
          </NavLink>
        </nav>
      </div>

      {/* Bottom Section - Logout */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={onLogout}
          className="w-full px-4 py-3 bg-red-600 text-white text-base font-medium rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
