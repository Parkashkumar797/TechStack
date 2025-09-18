// src/pages/AdminMaster.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // keep sidebar inside components folder

export default function AdminMaster() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
