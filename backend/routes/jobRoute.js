import express from "express";
import {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
  getJobsByCompany,
} from "../controllers/jobController.js";
import userAuth from "../middleware/authMiddleware.js";

const jobRoute = express.Router();

// Get all jobs (public)
jobRoute.get("/jobs", getAllJobs);

// Get single job by ID
jobRoute.get("/:id", getJobById);

// Create a job (company must be logged in)
jobRoute.post("/create", userAuth, createJob);

// Update a job
jobRoute.put("/:id", userAuth, updateJob);

// Delete a job
jobRoute.delete("/:id", userAuth, deleteJob);

// Get jobs of logged-in company
jobRoute.get("/my-jobs", userAuth, getJobsByCompany);

export default jobRoute;
