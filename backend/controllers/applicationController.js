import Job from "../models/jobModel.js";
import User from "../models/userModel.js";

// ✅ Apply to a job
export const applyJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { userId } = req.body; // user who is applying

    // check job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // check user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // check if already applied
    if (job.applicants.includes(userId)) {
      return res.status(400).json({ message: "User already applied for this job" });
    }

    // add applicant
    job.applicants.push(userId);
    await job.save();

    res.status(200).json({ message: "Applied successfully", job });
  } catch (error) {
    console.error("Error applying to job:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Get all applicants for a job
export const getApplicationsByJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    const job = await Job.findById(jobId).populate("applicants", "name email role createdAt");
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({
      jobTitle: job.title,
      applicants: job.applicants,
    });
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Get all jobs a user has applied to
export const getJobsAppliedByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const jobs = await Job.find({ applicants: userId }).populate("company", "companyName");
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching user applications:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
