import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  verifyOtp: {
    type: String,
    default: ""
  },
  verifyOtpExpireAt: {
    type: Number,
    default: 0
  },
  isAccountVerified: {
    type: Boolean,
    default: false
  },
  resetOtp: {
    type: String,
    default: ""
  },
  resetOtpExpireAt: {
    type: Number,
    default: 0
  },
  confirmPassword: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user"
  },

  // ✅ Applied Jobs (array of job IDs)
  appliedJobs: [
    {
      job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "jobs"
      },
      appliedAt: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

const userModel = mongoose.model("users", userSchema);
export default userModel;
