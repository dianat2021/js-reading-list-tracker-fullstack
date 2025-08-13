import handleRoute from "./handleRoute";

window.addEventListener("DOMContentLoaded", () => {
  history.replaceState(null, "", window.location.pathname);
  handleRoute();
});

window.addEventListener("popstate", () => {
  handleRoute();
});
