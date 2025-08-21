import { json } from "express";

const addBooks = async (title, author, date, status) => {
  const response = await fetch("http://localhost:6006/api/v1/books/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      bookTitle: title.value.trim(),
      bookAuthor: author.value.trim(),
      startingDate: date.value,
      readingStatus: status.value,
    }),
  });
  const books = response.json();
  console.log(books);
};

export default addBooks;
