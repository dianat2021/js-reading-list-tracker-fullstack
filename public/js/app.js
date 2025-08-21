import addBooks from "./addBooks";
import handleRoute from "./handleRoute";

// Selecting DOM elements
const addForm = document.querySelector(".add-form");
const titleInput = document.querySelector(".add-form__title-input");
const authorInput = document.querySelector(".add-form__author-input");
const dateInput = document.querySelector(".add-form__date-input");
const statusSelect = document.querySelector(".add-form__status-select");

window.addEventListener("DOMContentLoaded", () => {
  history.replaceState(null, "", window.location.pathname);
  handleRoute();
});

window.addEventListener("popstate", () => {
  handleRoute();
});

addForm.addEventListener("submit", async () => {
  // await addBooks(titleInput, authorInput, dateInput, statusSelect);
});
