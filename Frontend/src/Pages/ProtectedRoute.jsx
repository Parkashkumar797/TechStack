import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // or from context

  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
