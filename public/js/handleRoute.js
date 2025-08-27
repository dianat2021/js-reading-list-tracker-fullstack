import { displayLogin, setupLoginForm } from "./displayLogin.js";
import { displayRegister, setupRegisterForm } from "./displayRegister.js";
import displayMainContent from "./displayMainContent.js";
import { setupAddForm } from "./displayAddForm.js";

const handleRoute = () => {
  const path = window.location.pathname;

  if (path === "/login") {
    displayLogin();
    setupLoginForm();
  } else if (path === "/register") {
    displayRegister();
    setupRegisterForm();
  } else if (path === "/main") {
    displayMainContent();
    setupAddForm();
  } else {
    history.replaceState(null, "", "/login");
    displayLogin();
  }
};
export default handleRoute;
