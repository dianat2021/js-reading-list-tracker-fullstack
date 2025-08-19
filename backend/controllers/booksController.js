import { StatusCodes } from "http-status-codes";
import { Book } from "../models/bookModel.js";

export const getAllBooks = async (req, res) => {
  res.send("Get all books");
};
export const getBook = async (req, res) => {
  res.send("Get a book");
};
export const createBook = async (req, res) => {
  try {
    req.body.createdBy = req.user.userID;
    const book = await Book.create(req.body);
    res.status(StatusCodes.CREATED).json(book);
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({
        error: error.message || "Something went wrong while creating the book.",
      });
  }
};
export const deleteBook = async (req, res) => {
  res.send("Delete a book");
};
export const updateBook = async (req, res) => {
  res.send("Update a book");
};
