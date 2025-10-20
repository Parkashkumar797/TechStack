import express from "express";

import {

  company,

  updateJob,

  deleteJob,

  getJobById,

  registeredCompany,

} from "../controllers/jobController.js";



const jobRoute = express.Router();



// Admin routes

jobRoute.get("/jobs", company); // get all jobs

jobRoute.get("/:id", getJobById); // get single job

jobRoute.post("/company", registeredCompany); // create job

jobRoute.put("/:id", updateJob); // update job

jobRoute.delete("/:id", deleteJob); // delete job



export default jobRoute;