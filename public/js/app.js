// import addBooks from "./addBooks";
import handleRoute from "./handleRoute.js";
import { displayDeleteModal } from "./modals.js";
import { renderBooks } from "./renderBooks.js";
window.addEventListener("DOMContentLoaded", () => {
  history.replaceState(null, "", window.location.pathname);
  handleRoute();
  displayDeleteModal();
});

window.addEventListener("popstate", () => {
  handleRoute();
});

// Selecting DOM elements
renderBooks();
