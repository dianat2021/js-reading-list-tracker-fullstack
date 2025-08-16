import { User } from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    // const { firstname, lastname, email, passwrod } = req.body;
    // if (!firstname || !lastname || !email || !passwrod) {
    //   res.status(StatusCodes.BAD_REQUEST).send("validation error");
    // }
    const user = await User.create(req.body);
    const token = jwt.sign(
      { userID: user._id, firstname: user.firstname },
      "jwtSecret",
      { expiresIn: "30d" }
    );
    res.status(StatusCodes.CREATED).json({ user: user.firstname, token });
  } catch (error) {
    res.send(error);
  }
};
export const login = async (req, res) => {
  res.send("Login user...");
};
