import addBook from "./addBook.js";
import { renderBooks } from "./renderBooks.js";
import { validateAddBook } from "./validateAddBook.js";

export const displayAddForm = () => {
  const main = document.querySelector("main");
  const statusOptions = ["Reading", "Finished", "Stopped"];
  const addFormContainer = document.createElement("div");
  const addForm = document.createElement("form");
  const addFormInputWrapper = document.createElement("div");
  const TitleAuthorContainer = document.createElement("div");
  const dateStatusContainer = document.createElement("div");
  const bookTitleContainer = document.createElement("div");
  const bookAuthorContainer = document.createElement("div");
  const bookStartingDateContainer = document.createElement("div");
  const bookReadingStatusContainer = document.createElement("div");
  const bookTitleLabel = document.createElement("label");
  const bookAuthorLabel = document.createElement("label");
  const bookStartingDateLabel = document.createElement("label");
  const bookReadingStatusLabel = document.createElement("label");
  const bookTitleInput = document.createElement("input");
  const bookAuthorInput = document.createElement("input");
  const bookStartingDateInput = document.createElement("input");
  const bookReadingStatusSelect = document.createElement("select");
  const bookReadingStatusPlaceholder = document.createElement("option");
  const submitButton = document.createElement("button");
  const titleError = document.createElement("span");
  const authorError = document.createElement("span");
  const dateError = document.createElement("span");
  const statusError = document.createElement("span");

  // Appending elements
  main.append(addFormContainer);
  addFormContainer.append(addForm);
  addForm.append(addFormInputWrapper, submitButton);
  addFormInputWrapper.append(TitleAuthorContainer, dateStatusContainer);
  TitleAuthorContainer.append(bookTitleContainer, bookAuthorContainer),
    dateStatusContainer.append(
      bookStartingDateContainer,
      bookReadingStatusContainer
    );
  bookTitleContainer.append(bookTitleLabel, bookTitleInput, titleError);
  bookAuthorContainer.append(bookAuthorLabel, bookAuthorInput, authorError);
  bookStartingDateContainer.append(
    bookStartingDateLabel,
    bookStartingDateInput,
    dateError
  );
  bookReadingStatusContainer.append(
    bookReadingStatusLabel,
    bookReadingStatusSelect,
    statusError
  );
  bookReadingStatusSelect.append(bookReadingStatusPlaceholder);

  // Adding attributes

  bookTitleLabel.id = "title";
  bookAuthorLabel.id = "author";
  bookStartingDateLabel.id = "starting-date";
  bookReadingStatusLabel.id = "reading-status";

  bookTitleInput.id = "title";
  bookAuthorInput.id = "author";
  bookStartingDateInput.id = "starting-date";
  bookReadingStatusSelect.id = "reading-status";
  bookTitleInput.name = "title";
  bookAuthorInput.name = "author";
  bookStartingDateInput.name = "starting-date";
  bookReadingStatusSelect.name = "reading-status";
  bookStartingDateInput.type = "date";
  bookReadingStatusPlaceholder.value = "";

  // Populating elements
  bookTitleLabel.textContent = "Title";
  bookAuthorLabel.textContent = "Author";
  bookStartingDateLabel.textContent = "Date";
  bookReadingStatusLabel.textContent = "Status";
  bookReadingStatusPlaceholder.textContent = "Select reading status";
  statusOptions.forEach((option) => {
    const statusOption = document.createElement("option");
    statusOption.textContent = option;
    statusOption.value = option.toLocaleLowerCase();
    bookReadingStatusSelect.append(statusOption);
  });
  submitButton.textContent = "Submit";
  //Adding class names
  addFormContainer.classList.add("add-form-container");
  addForm.classList.add("add-form");
  addFormInputWrapper.classList.add("add-form-wrapper");
  bookTitleContainer.classList.add("book-title-container");
  bookAuthorContainer.classList.add("book-author-container");
  bookStartingDateContainer.classList.add("book-date-container");
  bookReadingStatusContainer.classList.add("book-status-container");
  submitButton.classList.add("add-form__submit-button");
  bookTitleInput.classList.add("add-form__title-input");
  bookAuthorInput.classList.add("add-form__author-input");
  bookStartingDateInput.classList.add("add-form__date-input");
  bookReadingStatusSelect.classList.add("add-form__status-select");
  titleError.classList.add("add-form__title-error");
  authorError.classList.add("add-form__author-error");
  dateError.classList.add("add-form__date-error");
  statusError.classList.add("add-form__status-error");
};

export const setupAddForm = () => {
  const addForm = document.querySelector(".add-form");
  const titleInput = document.querySelector(".add-form__title-input");
  const authorInput = document.querySelector(".add-form__author-input");
  const dateInput = document.querySelector(".add-form__date-input");
  const statusSelect = document.querySelector(".add-form__status-select");

  addForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validateAddBook()) {
      return;
    }
    await addBook(titleInput, authorInput, dateInput, statusSelect);
    renderBooks();
    console.log("book added successfully");
  });
};
