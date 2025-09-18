// src/pages/AdminRoute.jsx
import { Routes, Route } from "react-router-dom";
import AdminMaster from "./AdminMaster";
import AdminPanel from "./AdminPanel";
import AdminManageUsers from "./AdminManageUsers";
import AdminManageCompany from "./AdminManageCompany";

export default function AdminRoute() {
  return (
    <Routes>
      <Route element={<AdminMaster />}>
        <Route path="/" element={<AdminPanel />} />
        <Route path="/admin/users" element={<AdminManageUsers />} />
        <Route path="/admin/companies" element={<AdminManageCompany />} />
      </Route>
    </Routes>
  );
}
