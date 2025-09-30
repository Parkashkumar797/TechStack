import Job from "../models/jobModel.js";
import Company from "../models/companyModel.js";

// Get all jobs (with company details)
export const company = async (req, res) => {
  try {
    const jobs = await Job.find().populate("company", "companyName logoUrl website");
    res.status(200).json({ success: true, jobs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get a single job (with company details)
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate("company", "companyName logoUrl website");
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json({ success: true, job });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Create a new job
export const registeredCompany = async (req, res) => {
  try {
    const { title, description, location, level, companyId } = req.body;

    // Check if company exists
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    const newJob = await Job.create({
      title,
      description,
      location,
      level,
      company: companyId,
    });

    res.status(201).json({ success: true, job: newJob });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update a job
export const updateJob = async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("company", "companyName logoUrl website");

    if (!updatedJob) return res.status(404).json({ message: "Job not found" });
    res.status(200).json({ success: true, job: updatedJob });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete a job
export const deleteJob = async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    if (!deletedJob) return res.status(404).json({ message: "Job not found" });
    res.status(200).json({ success: true, message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get Jobs by Company
export const getJobsByCompany = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const jobs = await Job.find({ company: companyId }).populate("company", "companyName logoUrl website");
    res.status(200).json({ success: true, jobs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
