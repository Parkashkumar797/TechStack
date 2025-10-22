import express from "express";
import {
  getAllUsers,
  getAllCompanies,
  getAllJobs,
} from "../controllers/adminController.js";

const router = express.Router();

// For Admin Dashboard stats
router.get("/users", getAllUsers);
router.get("/companies", getAllCompanies);
router.get("/jobs", getAllJobs);

export default router;
