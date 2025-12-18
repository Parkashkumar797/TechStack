import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0A3A74] text-white mt-20 pt-10">
      <div className="container mx-auto px-4 2xl:px-20">

        {/* ---- TOP SECTION ---- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img className="h-10 w-10" src={assets.tslogo} alt="logo" />
              <span className="text-2xl font-bold">
                Talent<span className="text-[#FFD700]">Stack</span>
              </span>
            </div>
            <p className="text-gray-200 text-sm leading-6">
              TalentStack helps job seekers and employers connect easily.
              Explore thousands of opportunities and hire the best talent.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD700]">Quick Links</h3>
            <ul className="space-y-2 text-gray-200">
              <li><Link to="/" className="hover:text-[#FFD700]">Home</Link></li>
              <li><Link to="/job" className="hover:text-[#FFD700]">Jobs</Link></li>
              <li><Link to="/popular-jobs" className="hover:text-[#FFD700]">Popular Jobs</Link></li>
              <li><Link to="/job-category" className="hover:text-[#FFD700]">Categories</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD700]">For Employers</h3>
            <ul className="space-y-2 text-gray-200">
              <li><Link to="/register-company" className="hover:text-[#FFD700]">Register Company</Link></li>
              <li><Link to="/post-job" className="hover:text-[#FFD700]">Post a Job</Link></li>
              <li><Link to="/applications" className="hover:text-[#FFD700]">Applications</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD700]">Follow Us</h3>
            <div className="flex gap-3">
              <img width={38} src={assets.instagram_icon} alt="Instagram" className="hover:scale-110 transition" />
              <img width={38} src={assets.facebook_icon} alt="Facebook" className="hover:scale-110 transition" />
              <img width={38} src={assets.twitter_icon} alt="Twitter" className="hover:scale-110 transition" />
            </div>
          </div>

        </div>

        {/* ---- BOTTOM SECTION ---- */}
        <div className="mt-10 border-t border-gray-500 py-4 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} TalentStack — All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
