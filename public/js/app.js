// import addBooks from "./addBooks";
import handleRoute from "./handleRoute.js";
import register from "./register.js";
window.addEventListener("DOMContentLoaded", () => {
  history.replaceState(null, "", window.location.pathname);
  handleRoute();
});

window.addEventListener("popstate", () => {
  handleRoute();
});

// Selecting DOM elements
