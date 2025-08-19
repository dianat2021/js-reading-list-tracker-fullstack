import { StatusCodes } from "http-status-codes";
import { Book } from "../models/bookModel.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({ createdBy: req.user.userID }).sort(
      "createdAt"
    );

    res.status(StatusCodes.OK).json({ books, total: books.length });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
// Get single book ---------------------------------------------------------
export const getBook = async (req, res) => {
  try {
    const {
      user: { userID },
      params: { id: bookID },
    } = req;
    const book = await Book.findOne({ _id: bookID, createdBy: userID });
    if (!book) {
      return res.status(StatusCodes.NOT_FOUND).send("Did not find the book");
    }
    res.status(StatusCodes.OK).json(book);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
// Create book ---------------------------------------------------------
export const createBook = async (req, res) => {
  try {
    req.body.createdBy = req.user.userID;
    const book = await Book.create(req.body);
    res.status(StatusCodes.CREATED).json(book);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      error: error.message || "Something went wrong while creating the book.",
    });
  }
};
// Delete book ---------------------------------------------------------
export const deleteBook = async (req, res) => {
  try {
    const {
      user: { userID },
      params: { id: bookID },
    } = req;

    const book = await Book.findOneAndDelete({
      _id: bookID,
      createdBy: userID,
    });

    if (!book) {
      return res.status(StatusCodes.NOT_FOUND).send("Did not find the book");
    }
    res.status(StatusCodes.OK).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: error.message || "Something went wrong while deleting the book.",
    });
  }
};
// Update book ---------------------------------------------------------
export const updateBook = async (req, res) => {
  try {
    const {
      body: { bookTitle, bookAuthor, startingDate, readingStatus },
      user: { userID },
      params: { id: bookID },
    } = req;
    const updateData = { bookTitle, bookAuthor, startingDate, readingStatus };

    if (!bookTitle || !bookAuthor || !startingDate || !readingStatus) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send("All the fields must be provided");
    }
    const book = await Book.findOneAndUpdate(
      { _id: bookID, createdBy: userID },
      updateData,
      { new: true, runValidators: true }
    );
    if (!book) {
      return res.status(StatusCodes.NOT_FOUND).send("Did not find the book");
    }
    res.status(StatusCodes.OK).json(book);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: error.message || "Something went wrong while editing the book.",
    });
  }
};
