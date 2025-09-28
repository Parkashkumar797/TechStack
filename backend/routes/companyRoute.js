import express from "express";
import { register, getAllCompanies, getCompanyById, deleteCompany } from "../controllers/companyController.js";

const companyRoute = express.Router();

companyRoute.post("/register", register);
companyRoute.get("/companyProfile", getAllCompanies);
companyRoute.get("/:id", getCompanyById);
companyRoute.delete("/:id", deleteCompany);

export default companyRoute;
