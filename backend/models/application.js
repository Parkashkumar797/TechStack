// models/Application.js
import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  status: { type: String, default: "Applied" }, // Applied, Shortlisted, Rejected
  appliedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Application", applicationSchema);
