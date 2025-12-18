import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

export default function AdminHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    const keys = ["adminToken", "token", "user", "company", "companyInfo"];
    keys.forEach((key) => {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    });

    navigate("/admin/login", { replace: true });
  };

  return (
    <header className="bg-[#0A3A74] shadow-md">
      <div className="container px-20 py-5 flex justify-between items-center mx-auto">
        
        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img className="h-8 w-8" src={assets.tslogo} alt="logo" />

          <Link to="/admin">
            <span className="text-2xl text-white font-bold">
              Talent<span className="text-[#FFD700]">Stack</span> Admin
            </span>
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-6 text-lg font-semibold text-white">
          <Link to="/" className="hover:text-[#FFD700]">Dashboard</Link>
          <Link to="/admin/users" className="hover:text-[#FFD700]">Users</Link>
          <Link to="/admin/companies" className="hover:text-[#FFD700]">Companies</Link>
          <Link to="/admin/jobs" className="hover:text-[#FFD700]">Jobs</Link>

          <button
            onClick={handleLogout}
            className="bg-[#FFD700] text-[#0A3A74] font-bold px-4 py-2 rounded hover:bg-yellow-400 transition"
          >
            Logout
          </button>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-[#0A3A74] px-6 py-4 text-white space-y-4">
          <Link to="/admin" className="block hover:text-[#FFD700]">Dashboard</Link>
          <Link to="/admin/users" className="block hover:text-[#FFD700]">Users</Link>
          <Link to="/admin/companies" className="block hover:text-[#FFD700]">Companies</Link>
          <Link to="/admin/jobs" className="block hover:text-[#FFD700]">Jobs</Link>

          <button
            onClick={handleLogout}
            className="w-full bg-[#FFD700] text-[#0A3A74] px-4 py-2 font-bold rounded hover:bg-yellow-400 transition"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
