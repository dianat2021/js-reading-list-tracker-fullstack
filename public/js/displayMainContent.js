import { displayAddForm } from "./displayAddForm";
import { displayFilterSort } from "./displayFilterSort";

const displayMainContent = () => {
  history.pushState(null, "", "/main");

  const main = document.querySelector("main");
  main.innerHTML = "";
  displayFilterSort();
  displayAddForm();
  const booksContainer = document.createElement("div");
  main.append(booksContainer);
  booksContainer.classList.add("books-container");
};

export default displayMainContent;
