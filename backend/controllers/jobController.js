import jobModel from "../models/jobModel.js";
import applyJobModel from "../models/applyJobModel.js";
import User from "../models/userModel.js";
import multer, { diskStorage } from "multer";

// Company registers a job
export const registeredCompany = async (req, res) => {
  const { title, location, level, description } = req.body;
  if (!title || !location || !level || !description) {
    return res.json({ success: false, message: "Details are missing" });
  }
  try {
    const company = new jobModel({ title, location, level, description });
    await company.save();
    return res.json({ success: true, message: "Successfully Registered" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// Get all jobs
export const company = async (req, res) => {
  try {
    const jobs = await jobModel.find();
    res.json(jobs);
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// User applies for a job
export const userjob = async (req, res) => {
  // Check if resume file exists
  if (!req.file) {
    return res.json({ success: false, message: "Resume file is required." });
  }

  const { name, email, userId, jobId } = req.body;
  const filename = req.file.filename;
  const resumeUrl = `${req.protocol}://${req.get("host")}/images/${filename}`;

  if (!name || !email || !userId || !jobId) {
    return res.json({ success: false, message: "All fields are required." });
  }

  try {
    // 1️⃣ Save application in applyJobModel
    const application = new applyJobModel({
      name,
      email,
      resume: resumeUrl,
      userId,
      jobId,
    });
    await application.save();

    // 2️⃣ Add jobId to user's appliedJobs array if not already added
    const user = await User.findById(userId);
    if (!user) return res.json({ success: false, message: "User not found" });

    if (!user.appliedJobs.includes(jobId)) {
      user.appliedJobs.push(jobId);
      await user.save();
    }

    return res.json({
      success: true,
      message: "Application submitted successfully!",
      data: application,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
