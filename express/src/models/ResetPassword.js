import mongoose from "mongoose";

const resetPasswordSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "User Id is required"],
  },
  token: {
    type: String,
    required: [true, "Reset Password token is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  expireAt: {
    type: Date,
    default: Date.now() + 3600000, // 1hour
  },
  isUsed: {
    type: Boolean,
    default: false,
  },
});

const resetPasswordModel = mongoose.model("ResetPassword", resetPasswordSchema);

export default resetPasswordModel;
