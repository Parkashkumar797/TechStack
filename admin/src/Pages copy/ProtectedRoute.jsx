import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  // ✅ Check token and user data from sessionStorage
  const token = sessionStorage.getItem("token");
  const role = sessionStorage.getItem("role"); // Save role in login.jsx during login

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
