import { User } from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";
export const register = async (req, res) => {
  try {
    // const { firstname, lastname, email, passwrod } = req.body;
    // if (!firstname || !lastname || !email || !passwrod) {
    //   res.status(StatusCodes.BAD_REQUEST).send("validation error");
    // }
    const user = await User.create(req.body);
    const token = user.generateJWT();
    res.status(StatusCodes.CREATED).json({ user: user.firstname, token });
  } catch (error) {
    res.send(error);
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .send("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    res.status(StatusCodes.UNAUTHORIZED).send("Invalid credentials");
  }

  const token = user.generateJWT();
  res.status(StatusCodes.OK).json({
    user: { firstname: user.firstname, lastname: user.lastname, token },
  });
};
