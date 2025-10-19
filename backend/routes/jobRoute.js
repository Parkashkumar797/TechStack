import express from "express";
import {
  getAllJobs, // Changed from 'company'
  updateJob,
  deleteJob,
  getJobById,
  createJob,
} from "../controllers/jobController.js";

const router = express.Router();

// GET all jobs for admin
router.get("/jobs", getAllJobs); // Used the correct function name 'getAllJobs'

// GET a single job by ID
router.get("/:id", getJobById);

// POST a new job for a company
router.post("/company", createJob);

// UPDATE a job by ID
router.put("/:id", updateJob);

// DELETE a job by ID
router.delete("/:id", deleteJob);

export default router;

