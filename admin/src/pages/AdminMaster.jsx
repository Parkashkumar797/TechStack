import { Outlet } from "react-router-dom";
// Corrected the import path to be more explicit, which can resolve bundling issues.
import Sidebar from "../components/Sidebar.jsx";

export default function AdminMaster() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* Content from child routes will be rendered here */}
          <Outlet />
        </div>
      </main>
    </div>
  );
}

