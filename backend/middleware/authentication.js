import jwt from "jsonwebtoken";
// import { User } from "../models/userModel";
import { StatusCodes } from "http-status-codes";

export const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(StatusCodes.UNAUTHORIZED).send("Invalid authentication");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // Attaching the authenticated user to the request.body
    req.user = {
      userID: payload.userID,
      firstname: payload.firstname,
      lastname: payload.lastname,
    };
    next();
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).send("Invalid authentication");
  }
};
