import { getBooks } from "./getBooks.js";
import { displayDeleteModal } from "./modals.js";

export const renderBooks = async () => {
  const books = await getBooks();
  const booksContainer = document.querySelector(".books-container");
  const booksWrapper = document.createElement("ul");
  booksContainer.innerHTML = "";
  books.forEach((book) => {
    // Creating elements
    const bookCard = document.createElement("li");
    const bookDetailsContainer = document.createElement("div");
    const bookTitle = document.createElement("span");
    const bookAuthor = document.createElement("span");
    const bookStartingDate = document.createElement("span");
    const bookStatus = document.createElement("span");
    const bookCreatedAt = document.createElement("span");
    const bookUpdatedAt = document.createElement("span");
    const bookButtonsContainer = document.createElement("div");
    const deleteBookButton = document.createElement("button");
    const editBookButton = document.createElement("button");

    // Appending elements
    booksContainer.append(booksWrapper);
    booksWrapper.append(bookCard);
    bookCard.append(bookDetailsContainer);
    bookDetailsContainer.append(
      bookTitle,
      bookAuthor,
      bookStartingDate,
      bookStatus,
      bookCreatedAt,
      bookUpdatedAt,
      bookButtonsContainer
    );
    bookButtonsContainer.append(deleteBookButton, editBookButton);

    // Populating elements
    const formattedStartingDate = new Date(
      book.startingDate
    ).toLocaleDateString();
    const formattedCreatedAt = new Date(book.createdAt).toLocaleDateString();
    const formattedUpdatedAt = new Date(book.createdAt).toLocaleString();
    const formattedReadingStatus =
      book.readingStatus.charAt(0).toUpperCase() + book.readingStatus.slice(1);
    bookTitle.textContent = `Title: ${book.bookTitle}`;
    bookAuthor.textContent = `Author: ${book.bookAuthor}`;
    bookStartingDate.textContent = `Starting date: ${formattedStartingDate}`;
    bookStatus.textContent = `Status: ${formattedReadingStatus}`;
    bookCreatedAt.textContent = `Created on: ${formattedCreatedAt}`;
    bookUpdatedAt.textContent = `Updated at: ${formattedUpdatedAt}`;
    deleteBookButton.textContent = "Delete";
    editBookButton.textContent = "Edit";

    // Adding class names
    booksWrapper.classList.add("books");
    bookCard.classList.add("book-card");
    bookDetailsContainer.classList.add("book-card__details-container");
    bookButtonsContainer.classList.add("book-card__buttons-container");

    // Adding event listeners
    deleteBookButton.addEventListener("click", () => {
      displayDeleteModal(book._id, book.bookTitle);
    });
  });
};
