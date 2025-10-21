import express from "express";
import { 
    register, 
    getAllCompanies, 
    getCompanyById, 
    deleteCompany, 
    getCompanyProfile,
    updateCompanyProfile, 
    createCompanyProfile 
} from "../controllers/companyController.js";
import userAuth from "../middleware/authMiddleware.js"; // This should match your middleware file name

const companyRoute = express.Router();

// --- THIS IS THE FINAL FIX ---
// The `userAuth` middleware is now protecting the profile route.
// This was the missing piece.
companyRoute.get("/profile/me", userAuth, getCompanyProfile);


// --- Other Routes ---
companyRoute.post("/register", register);
companyRoute.get("/companyProfile", getAllCompanies);
companyRoute.get("/:id", getCompanyById);

// Protected routes
companyRoute.put("/profile/update", userAuth, updateCompanyProfile);
companyRoute.delete("/:id", userAuth, deleteCompany);
companyRoute.post("/create", userAuth, createCompanyProfile);


export default companyRoute;

