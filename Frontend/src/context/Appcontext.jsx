// src/context/AppContext.jsx

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  // State for search and jobs (your existing code)
  const [searchFilter, setSearchFilter] = useState({ title: "", location: "" });
  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState([]);

  // ✅ 1. Add authentication state
  // We get the initial token from localStorage
  const [token, setToken] = useState(localStorage.getItem("token"));

  // ✅ 2. Create login and logout functions
  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setToken(null);
    alert("✅ Logged out successfully");
  };

  // Your existing useEffect for fetching jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/job/jobs");
        setJobs(res.data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  // ✅ 3. Add the auth state and functions to the context value
  const value = {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs,
    token, // <-- Add token
    login,   // <-- Add login function
    logout,  // <-- Add logout function
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};