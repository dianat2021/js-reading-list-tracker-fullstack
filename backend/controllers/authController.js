import { User } from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs";
export const register = async (req, res) => {
  try {
    // const { firstname, lastname, email, passwrod } = req.body;
    // if (!firstname || !lastname || !email || !passwrod) {
    //   res.status(StatusCodes.BAD_REQUEST).send("validation error");
    // }

    const { firstname, lastname, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const temporaryUser = {
      firstname,
      lastname,
      email,
      password: hashedPass,
    };

    const user = await User.create(temporaryUser);
    res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    res.send(error);
  }
};
export const login = async (req, res) => {
  res.send("Login user...");
};
