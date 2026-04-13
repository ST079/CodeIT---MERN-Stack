import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!!!!"],
    minlength: [3, "Name must be 3 characters long."],
  },
  email: {
    type: String,
    required: [true, "Email is required!!!"],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (value) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(value);
      },
    },
  },
  password: {
    type: String,
    required: [true, "Password is required!!!"],
    validate: {
      validator: (value) => {
        const passwordRegex = /^.{6,}$/; //at least 6 Characters for now
        return passwordRegex.test(value);
      },
    },
  },
  address: {
    country: {
      type: String,
      required: true,
      default: "Nepal",
    },
    province: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    street: String,
  },

  Phone: {
    type: Number,
    required: [true, "Phone Number is required!!!"],
    validate: {
      validator: (value) => {
        const phoneRegex = /^\d{10}$/; // Simple regex for 10 digit phone numbers
        return phoneRegex.test(value);
      },
    },
  },
  createdAt: { type: Date, default: Date.now(), immuatable: true },
  roles: {
    type: [String],
    default: ["USER"],
    enum: ["USER", "ADMIN", "MERCHANT"],
  },
  profileImageUrl: String,
  isActve: { type: Boolean, default: true },
});

const userModel = mongoose.model("User", userSchema);
export default userModel;
