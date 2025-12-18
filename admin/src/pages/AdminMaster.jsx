import { Outlet } from "react-router-dom";
// Corrected the import path to be more explicit, which can resolve bundling issues.
// import Sidebar from "../components/Sidebar.jsx";
import AdminHeader from "../components/AdminHeader.jsx";
import Footer from "./Footer.jsx";


export default function AdminMaster() {
  return (
    <>
   <AdminHeader/>
          <Outlet />
          <Footer/>
</>
  );
}

