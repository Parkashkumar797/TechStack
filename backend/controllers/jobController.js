// controllers/jobController.js
import jobModel from "../models/jobModel.js";
// import Job from "../models/jobModel.js";

// Get all jobs
export const company = async (req, res) => {
  try {
    const jobs = await jobModel.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single job
export const getJobById = async (req, res) => {
  try {
    const job = await jobModel.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new job
export const registeredCompany = async (req, res) => {
  try {
    const newJob = new jobModel(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a job
export const updateJob = async (req, res) => {
  try {
    const updatedJob = await jobModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a job
export const deleteJob = async (req, res) => {
  try {
    await jobModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// ✅ Get all jobs created by a specific company
export const getJobsByCompany = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const jobs = await jobModel.find({ company: companyId }); // assuming 'company' field references Company model
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs by company:", error);
    res.status(500).json({ message: "Error fetching jobs for this company" });
  }
};

