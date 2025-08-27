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
  // Extracting email and password from the req.body
  const { email, password } = req.body;
  // Throwing error if email or password are not provided
  if (!email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send("Please provide email and password");
  }
  // If email and password are provided, try to find the user
  const user = await User.findOne({ email });
  // If user does not exist, throw an error
  if (!user) {
    return res.status(StatusCodes.UNAUTHORIZED).send("Invalid credentials");
  }
  // Checking of the provided password matches the password registered in the database
  const isUserPassCorrect = await user.checkPassword(password);
  // If the provided password does not match the password registered in the database, throw an error
  if (!isUserPassCorrect) {
    return res.status(StatusCodes.UNAUTHORIZED).send("Invalid credentials");
  }
  const token = user.generateJWT();
  res.status(StatusCodes.OK).json({
    user: { firstname: user.firstname, lastname: user.lastname, token },
  });
};
