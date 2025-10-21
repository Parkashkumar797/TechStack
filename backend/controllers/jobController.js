import companyModel from "../models/companyModel.js";
import jobModel from "../models/jobModel.js";

// Get all jobs
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await jobModel
      .find()
      .populate("company", "companyName email website logoUrl");
    res.status(200).json({ success: true, jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ success: false, message: "Error fetching jobs" });
  }
};

// Get job by ID
export const getJobById = async (req, res) => {
  try {
    const job = await jobModel.findById(req.params.id).populate("company");
    if (!job) return res.status(404).json({ success: false, message: "Job not found" });
    res.status(200).json({ success: true, job });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create new job
export const createJob = async (req, res) => {
  try {
    const { title, description, location, salary } = req.body;

    // Find company of logged-in user
    const company = await companyModel.findOne({ email: req.user.email });
    if (!company)
      return res.status(404).json({ success: false, message: "Create your company profile first" });

    const newJob = new jobModel({
      title,
      description,
      location,
      salary,
      company: company._id,
      companyEmail: company.email,
    });

    await newJob.save();
    res.status(201).json({ success: true, job: newJob });
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update job
export const updateJob = async (req, res) => {
  try {
    const updatedJob = await jobModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedJob) return res.status(404).json({ success: false, message: "Job not found" });
    res.status(200).json({ success: true, job: updatedJob });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete job
export const deleteJob = async (req, res) => {
  try {
    const deleted = await jobModel.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Job not found" });
    res.status(200).json({ success: true, message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get jobs by company (for logged-in recruiter)
export const getJobsByCompany = async (req, res) => {
  try {
    const company = await companyModel.findOne({ email: req.user.email });
    if (!company)
      return res.status(404).json({ success: false, message: "Company not found" });

    const jobs = await jobModel.find({ company: company._id });
    res.status(200).json({ success: true, jobs });
  } catch (error) {
    console.error("Error fetching company jobs:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
