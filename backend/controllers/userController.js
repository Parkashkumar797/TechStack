import userModel from "../models/userModel.js";

// Get a single user profile with applied jobs
export const userProfile = async (req, res) => {
  const { userId } = req.params; // get userId from request params

  try {
    const user = await userModel.findById(userId).populate("appliedJobs.job"); // populate applied jobs
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find().select("-password"); // exclude password
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Error fetching users" });
  }
};

