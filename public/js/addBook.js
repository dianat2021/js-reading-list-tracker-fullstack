const addBook = async (title, author, date, status) => {
  const token = localStorage.getItem("token");
  console.log(token);

  if (!token) {
    throw new Error("Authentication token missing. Please log in.");
  }
  const response = await fetch("http://localhost:6006/api/v1/books/", {
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
    throw new Error("Failed to add book");
  }
  const books = await response.json();

  console.log(books);
};

export default addBook;
