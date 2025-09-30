import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  // Corrected reference to company model
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "company", // 👈 must match the name in mongoose.model("company", ...)
    required: true,
  },

  postedOn: {
    type: Date,
    default: Date.now,
  },
});

const JobModel = mongoose.model("job", jobSchema);
export default JobModel;
