import displayLogin from "./displayLogin.js";
import displayRegister from "./displayRegister.js";

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path === "/register") {
    displayRegister();
  } else if (path === "/login") {
    displayLogin();
  } else {
    history.replaceState(null, "", "/login");
    displayLogin();
  }
});
