// import addBooks from "./addBooks";
import handleRoute from "./handleRoute.js";
import { renderBooks } from "./renderBooks.js";
import { applySortFilter } from "./sort-filter.js";
// document.addEventListener("DOMContentLoaded", renderBooks);
// Attach listener after DOM is ready
document.addEventListener("DOMContentLoaded", async () => {
  // Optional: apply sort on initial load
  await renderBooks();
  applySortFilter();
});

// Selecting elements
// const sortSelect = document.querySelector(".sort__select");

window.addEventListener("DOMContentLoaded", () => {
  history.replaceState(null, "", window.location.pathname);
  handleRoute();
});

window.addEventListener("popstate", () => {
  handleRoute();
});

// Selecting DOM elements
