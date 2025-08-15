import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "First name is required"],
    minLength: 2,
    maxLength: 50,
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, "Last name is required"],
    minLength: 2,
    maxLength: 50,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    minLength: 2,
    maxLength: 50,
    trim: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: 6,
    maxLength: 50,
    trim: true,
  },
});

export const User = mongoose.model("User", userSchema);
