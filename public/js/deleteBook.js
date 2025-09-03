import { displayToast } from "./displayToast.js";
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
      throw new Error("Error deleting book. Please try again.");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    displayToast("Error deleting book. Please try again.");
  }
};
