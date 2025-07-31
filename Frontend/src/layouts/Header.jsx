import { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";

export default function Header() {
  const [isopen, setIsopen] = useState(false)
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
          <div className="lg:flex  text-lg hidden items-center gap-6 text-white font-semibold">
            <ul className="flex gap-4">
              <li><Link className="hover:text-[#FFD700]" to="/">Home</Link></li>
              <li><Link className="hover:text-[#FFD700]" to="#">Jobs</Link></li>
              <li><Link className="hover:text-[#FFD700]" to="#">Applications</Link></li>
            </ul>

            {/* Signup Button */}
              <Link to="/login">
            <button className="bg-[#FFD700] text-[#0A3A74] font-bold px-4 py-2 rounded hover:bg-yellow-400 transition">
             Sign In
            </button>
            </Link>
          </div>
          {/* Mobile Menu toggle */}
          <button className="lg:hidden text-3xl text-white top-15 right-0 " onClick={() => setIsopen(!isopen)}>

            {isopen ? "✕" : "☰"}
          </button>
        </div>
        {/* mobile navigation  */}
        <div
          className={`fixed top-17 right-0 h-full w-64 z-50 transition-all duration-700 ease-in-out transform bg-[#0A3A74] text-white lg:hidden ${isopen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
        >
          <div className="nav-links flex flex-col gap-4 items-center py-4">
            <a href="/" className="text-lg font-bold duration-300 hover:text-gray-300">Home</a>
            <a href="/about" className="text-lg font-bold duration-300 hover:text-gray-300">Jobs</a>
            <a href="/services" className="text-lg font-bold duration-300 hover:text-gray-300">Applications</a>
            {/* <a href="/join-us" className="text-lg font-bold duration-300 hover:text-gray-300">Careers</a>
            <a href="/contact" className="text-lg font-bold duration-300 hover:text-gray-300 font-serif">Contact</a> */}
          </div>
        </div>
      </div>
    </>
  );
}
