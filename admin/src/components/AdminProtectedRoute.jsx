// src/routes/AdminProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function AdminProtectedRoute({ children }) {
  const adminToken =
    localStorage.getItem("adminToken") || sessionStorage.getItem("adminToken");

  if (!adminToken) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
