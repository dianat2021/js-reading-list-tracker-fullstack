import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
    trim: true,
  },
});
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      userID: this._id,
      firstname: this.firstname,
      lastname: this.lastname,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.JWT_EXPIRATION,
    }
  );
};

userSchema.methods.checkPassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

export const User = mongoose.model("User", userSchema);
