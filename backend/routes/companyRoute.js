import express from "express";
import {
  register,  getAllCompanies,
  getCompanyById, deleteCompany,
  getCompanyProfile,
  updateCompanyProfile, // ✅ New controller  updateCompanyProfile // ✅ New controller
} from "../controllers/companyController.js";

import userAuth  from "../middleware/authMiddleware.js"; // ✅ verify JWT token

const companyRoute = express.Router();

// Public routes
companyRoute.post("/register", register);
companyRoute.get("/companyProfile", getAllCompanies);
companyRoute.get("/:id", getCompanyById);

// Protected routes (for logged-in company)
companyRoute.get("/profile/me", userAuth, getCompanyProfile); // ✅ get logged-in company profile
companyRoute.put("/profile/update", userAuth, updateCompanyProfile); // ✅ update company profile

// Admin route (optional)
companyRoute.delete("/:id", deleteCompany);

export default companyRoute;
