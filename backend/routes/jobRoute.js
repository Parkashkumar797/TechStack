import express from "express";
import {
  company, // get all jobs
  updateJob,
  deleteJob,
  getJobById,
  registeredCompany, // create job
  getJobsByCompany // ✅ New controller to get jobs created by specific company
} from "../controllers/jobController.js";

import userAuth from "../middleware/authMiddleware.js"; // ✅ add JWT protection

const jobRoute = express.Router();

// Public routes
jobRoute.get("/jobs", company); // ✅ get all jobs
jobRoute.get("/:id", getJobById); // ✅ get single job

// Company routes (protected)
jobRoute.post("/company", userAuth, registeredCompany); // ✅ create job
jobRoute.get("/my-jobs", userAuth, getJobsByCompany);   // ✅ get jobs created by logged-in company
jobRoute.put("/:id", userAuth, updateJob);              // ✅ update job
jobRoute.delete("/:id", userAuth, deleteJob);           // ✅ delete job

export default jobRoute;
