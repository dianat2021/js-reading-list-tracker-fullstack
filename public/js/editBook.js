export const editBook = async (bookID) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No auth token found");
  }

  const editedTitle = document.querySelector(".edit-form__title-input");
  const editedAuthor = document.querySelector(".edit-form__author-input");
  const editedDate = document.querySelector(".edit-form__date-input");
  const editedStatus = document.querySelector(".edit-form__status-select");
  const response = await fetch(`http://localhost:6006/api/v1/books/${bookID}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      bookTitle: editedTitle.value.trim(),
      bookAuthor: editedAuthor.value.trim(),
      startingDate: editedDate.value.trim(),
      readingStatus: editedStatus.value.trim(),
    }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to edit book");
  }
};
