import React from "react"
import {Routes,Route} from 'react-router-dom'
import AdminMaster from "./pages/AdminMaster";
import AdminDashboard from "./pages/AdminDashboard";
import AdminManageUsers from "./pages/AdminManageUsers";
import AdminManageCompany from "./pages/AdminManageCompany";
import CompanyDetail from "./pages/CompanyDetail";
import EditCompany from "./pages/CompanyDetail";
import EditUser from "./pages/EditUser";
import AdminManageJobs from "./pages/AdminManageJob";
  import { ToastContainer, toast } from 'react-toastify';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AdminMaster />}>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminManageUsers />} />
          <Route path="/admin/companies" element={<AdminManageCompany />} />
          <Route path="/admin/company/:id" element={<CompanyDetail />} />
          <Route path="/admin/jobs" element={<AdminManageJobs />} />
          <Route path="/admin/company/edit/:id" element={<EditCompany/>} />
          <Route path="/admin/edit-user/:id" element={<EditUser />} />

        </Route>
      </Routes>
      <ToastContainer />
    </>
  );

}

export default App;
