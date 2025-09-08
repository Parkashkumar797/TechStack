
import { company, getApplications, registeredCompany, userjob } from "../controllers/jobController.js";
import userAuth from "../middleware/authMiddleware.js";
import upload from "../middleware/jobMiddleware.js";
import express from "express";
const jobRoute=express.Router();
jobRoute.get("/jobs",company)
jobRoute.post("/company",registeredCompany)
jobRoute.post("/apply-job",upload.single("resume"),userjob)
jobRoute.get("/applications",userAuth, getApplications); 
export default jobRoute; 