import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    bookTitle: {
      type: String,
      required: [true, "Book title is required"],
      minLength: 1,
      maxLength: 100,
      trim: true,
    },
    bookAuthor: {
      type: String,
      required: [true, "Book author is required"],
      minLength: 1,
      maxLength: 100,
      trim: true,
    },
    startingDate: {
      type: Date,
      required: [true, "Starting date is required"],
    },
    readingStatus: {
      type: String,
      enum: {
        values: ["reading", "finished", "stopped"],
        message: `{VALUE} is not supported`,
      },
      required: [true, "Reading status is required"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
