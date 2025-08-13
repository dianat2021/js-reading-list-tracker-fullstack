import express from "express";
import dotenv from "dotenv";
import { authRouter } from "./routes/authRoutes.js";
import { bookRouter } from "./routes/bookRouter.js";

// Load environment variables
dotenv.config();

// Port number
const PORT = process.env.PORT || 6006;
// Initializing express
const app = express();

// Middlewares
app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/books", bookRouter);
// Initialize app
const initializeApp = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

initializeApp();
