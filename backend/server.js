import express from "express";
import dotenv from "dotenv";
import { authRouter } from "./routes/authRoutes.js";
import { bookRouter } from "./routes/bookRouter.js";
import connectDB from "./db/connectDB.js";
import { authenticateUser } from "./middleware/authentication.js";

// Load environment variables
dotenv.config();

// Port number
const PORT = process.env.PORT || 6006;
// Initializing express
const app = express();

// Middlewares
app.use(express.json());
// We can add authenticateUser to each route separately but this is a better approachbooks
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/books", authenticateUser, bookRouter);
// Initialize app
const initializeApp = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

initializeApp();
