import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from "../controllers/booksController.js";

export const bookRouter = express.Router();

bookRouter.get("/", getAllBooks);
bookRouter.post("/", createBook);
bookRouter.get("/:id", getBook);
bookRouter.delete("/:id", deleteBook);
bookRouter.patch("/:id", updateBook);
