import usermodel from "../models/userModel.js";
import Company from "../models/companyModel.js";
import Job from "../models/jobModel.js";
// getAllUsers
export const getAllUsers = async (req, res) => {
  try {
    const users = await usermodel.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// getAllCompanies
export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// getAllJobs
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
