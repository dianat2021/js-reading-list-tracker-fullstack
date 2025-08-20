import express from "express";
import dotenv from "dotenv";
import { authRouter } from "./routes/authRoutes.js";
import { bookRouter } from "./routes/bookRouter.js";
import connectDB from "./db/connectDB.js";
import { authenticateUser } from "./middleware/authentication.js";
import helmet from "helmet";
import cors from "cors";
import xss from "xss-clean";
import rateLimit from "express-rate-limit";
// Load environment variables
dotenv.config();

// Port number
const PORT = process.env.PORT || 6006;
// Initializing express
const app = express();

// Limit request
app.set("trust proxy", true);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
});
app.use(limiter);

// Middlewares
app.use(express.json());
// Security packages
app.use(helmet());
app.use(cors());
app.use(xss());
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
