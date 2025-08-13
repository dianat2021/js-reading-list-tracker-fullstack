import express from "express";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Port number
const PORT = process.env.PORT || 6006;
// Initializing express
const app = express();

// Middlewares
app.use(express.json());

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
