import mongoose from "mongoose";

const applyJobSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: "jobs", required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    resume: { type: String, required: true },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

const applyJobModel = mongoose.model("applications", applyJobSchema);

export default applyJobModel;
