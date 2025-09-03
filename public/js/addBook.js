import { displayToast } from "./displayToast";

const addBook = async (title, author, date, status) => {
  try {
    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
      throw new Error("Authentication token missing. Please log in.");
    }
    const response = await fetch("http://localhost:6006/api/v1/book/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        bookTitle: title.value.trim(),
        bookAuthor: author.value.trim(),
        startingDate: date.value,
        readingStatus: status.value,
      }),
    });
    if (!response.ok) {
      displayToast("Error adding book. Please try again.");
      return;
    }
    const books = await response.json();

    console.log(books);
  } catch (error) {
    displayToast("Error adding book. Please try again.");
  }
};

export default addBook;
