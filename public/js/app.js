// import addBooks from "./addBooks";
import { displayToast } from "./displayToast.js";
import handleRoute from "./handleRoute.js";
import { renderBooks } from "./renderBooks.js";
import { applySortFilter } from "./sort-filter.js";
// document.addEventListener("DOMContentLoaded", renderBooks);
// Attach listener after DOM is ready
document.addEventListener("DOMContentLoaded", async () => {
  // Optional: apply sort on initial load
  history.replaceState(null, "", window.location.pathname);
  handleRoute();
  await renderBooks();
  applySortFilter();
});

// Selecting elements
// const sortSelect = document.querySelector(".sort__select");

window.addEventListener("popstate", () => {
  handleRoute();
});

// Selecting DOM elements
