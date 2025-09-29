import express from "express";
import {
  applyJob,
  getApplicationsByJob,
  getJobsAppliedByUser,
} from "../controllers/applicationController.js";

const router = express.Router();

// user applies for a job
router.post("/:jobId/apply", applyJob);

// company/admin checks all applicants for a job
router.get("/:jobId/applications", getApplicationsByJob);

// user sees jobs they applied to
router.get("/user/:userId", getJobsAppliedByUser);

export default router;
