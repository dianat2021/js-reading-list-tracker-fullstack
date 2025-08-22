export const getBooks = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch("http://localhost:6006/api/v1/books", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  const { books } = data;
  console.log(books);
  return books;
};
