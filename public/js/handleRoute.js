import displayLogin from "./displayLogin.js";
import { displayRegister, setupRegisterForm } from "./displayRegister.js";
import displayMainContent from "./displayMainContent.js";

const handleRoute = () => {
  const path = window.location.pathname;

  if (path === "/login") {
    displayLogin();
  } else if (path === "/register") {
    displayRegister();
    setupRegisterForm();
  } else if (path === "/main") {
    displayMainContent();
  } else {
    history.replaceState(null, "", "/login");
    displayLogin();
  }
};
export default handleRoute;
