import displayLogin from "./displayLogin.js";
import displayMainContent from "./displayMainContent.js";
import displayRegister from "./displayRegister.js";

window.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  history.replaceState(null, "", path);

  if (path === "/login") {
    displayLogin();
  } else if (path === "/register") {
    displayRegister();
  } else if (path === "/main") {
    displayMainContent();
  } else {
    history.replaceState(null, "", "/login");
    displayLogin();
  }
});

window.addEventListener("popstate", () => {
  const path = window.location.pathname;
  console.log("popstate fired:", window.location.pathname); // 👀

  if (path === "/login") {
    displayLogin();
  } else if (path === "/register") {
    displayRegister();
  } else if (path === "/main") {
    displayMainContent();
  } else {
    history.replaceState(null, "", "/login");
    displayLogin();
  }
});
