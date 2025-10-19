// src/pages/AdminRoute.jsx
import { Routes, Route } from "react-router-dom";
import AdminMaster from "./AdminMaster";
import AdminPanel from "./AdminPanel";
import AdminManageUsers from "./AdminManageUsers";
import AdminManageCompany from "./AdminManageCompany";
import CompanyDetail from "./CompanyDetail";
import AdminManageJobs from "./AdminManageJob";
import EditCompany from "./EditCompany";
import EditUser from "./EditUser";

export default function AdminRoute() {
  return (
    <Routes>
      <Route element={<AdminMaster />}>
        <Route path="/" element={<AdminPanel />} />
        <Route path="/admin/users" element={<AdminManageUsers />} />
        <Route path="/admin/companies" element={<AdminManageCompany />} />
        <Route path="/admin/company/:id" element={<CompanyDetail />} />
        <Route path="/admin/jobs" element={<AdminManageJobs />} />
         <Route path="/admin/company/edit/:id" element={<EditCompany/>} />
         <Route path="/admin/edit-user/:id" element={<EditUser />} />

      </Route>
    </Routes>
  );
}
