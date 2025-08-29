import { renderBooks } from "./renderBooks";

export const applySortFilter = async () => {
  const sortSelect = document.querySelector(".sort__select");
  if (!sortSelect) return; // No warning, no error
  const token = localStorage.getItem("token");
  sortSelect.addEventListener("change", async () => {
    const sortValue = sortSelect.value;
    const params = new URLSearchParams({ sort: sortValue });
    const response = await fetch(
      `http://localhost:6006/api/v1/books/?${params.toString()}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const { books } = await response.json();
    renderBooks(books);
    console.log(books);
  });
};
