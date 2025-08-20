import { displayAddForm } from "./displayAddForm";
import { displayFilterSort } from "./displayFilterSort";

const displayMainContent = () => {
  history.pushState(null, "", "/main");

  const main = document.querySelector("main");
  main.innerHTML = "";

  displayFilterSort();
  displayAddForm();
};

export default displayMainContent;
