export const deleteBook = async (bookID) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No auth token found");
    }

    const response = await fetch(
      `http://localhost:6006/api/v1/books/${bookID}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to delete book");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
