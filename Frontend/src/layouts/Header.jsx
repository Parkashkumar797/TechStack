// src/components/Header.js

import { useState, useContext } from "react"; // ✅ Import useContext
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { AppContext } from "../context/Appcontext.jsx"

export default function Header() {
  const { token, logout } = useContext(AppContext); // ✅ Get token and logout from context
  const [isopen, setIsopen] = useState(false);
  const navigate = useNavigate();

  // ✅ No more local state or useEffect needed for login status!

  const handleLogout = () => {
    logout(); // ✅ This now comes from the context
    navigate("/login"); // redirect to login page
  };

  return (
    <>
      <div className="header bg-[#0A3A74]">
        <div className="container px-20 py-5 flex justify-between items-center mx-auto">
          {/* Logo */}
          <div className="flex cursor-pointer items-center gap-2">
            <img className="h-8 w-8" src={assets.tslogo} alt="logo" />
            <Link to="/">
              <span className="text-2xl text-white font-bold">
                Talent<span className="text-[#FFD700]">Stack</span>
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="lg:flex text-lg hidden items-center gap-6 text-white font-semibold">
            <ul className="flex gap-4">
              <li><Link className="hover:text-[#FFD700]" to="/">Home</Link></li>
              <li><Link className="hover:text-[#FFD700]" to="/job">Jobs</Link></li>
              <li><Link className="hover:text-[#FFD700]" to="/applications">Applications</Link></li>
            </ul>

            {/* ✅ Check user logged in or not BASED ON CONTEXT TOKEN */}
            {token ? (
              <button
                onClick={handleLogout}
                className="bg-[#FFD700] text-[#0A3A74] font-bold px-4 py-2 rounded hover:bg-yellow-400 transition"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-[#FFD700] text-[#0A3A74] font-bold px-4 py-2 rounded hover:bg-yellow-400 transition">
                  Sign In
                </button>
              </Link>
            )}
          </div>
          {/* ... rest of your mobile menu JSX ... */}
        </div>
      </div>
    </>
  );
}