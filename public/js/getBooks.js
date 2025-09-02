export const getBooks = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:6006/api/v1/books", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    // Server responded with an error status. You got a valid response object
    if (!response.ok) {
      throw new Error("Failed to fetch books.");
    }
    const data = await response.json();
    const { books } = data;
    console.log(books);

    return books;
  } catch (error) {
    throw new Error("Failed to fetch books.");
  }
};
