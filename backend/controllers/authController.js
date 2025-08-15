import { User } from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";
export const register = async (req, res) => {
  try {
    // const { firstname, lastname, email, passwrod } = req.body;
    // if (!firstname || !lastname || !email || !passwrod) {
    //   res.status(StatusCodes.BAD_REQUEST).send("validation error");
    // }

    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    res.send(error);
  }
};
export const login = async (req, res) => {
  res.send("Login user...");
};
