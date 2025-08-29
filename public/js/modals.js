import { deleteBook } from "./deleteBook";
import { editBook } from "./editBook";
import { populateEditForm } from "./populateEditForm";
import { renderBooks } from "./renderBooks";
import { validateEditForm } from "./validateEditForm";

export const displayDeleteModal = (bookID, bookTitle) => {
  const main = document.querySelector("main");

  // Creating elements
  const deleteModalWrapper = document.createElement("div");
  const deleteModal = document.createElement("div");
  const deleteMessage = document.createElement("p");
  const deleteModalButtonsContainer = document.createElement("div");
  const confirmDeleteButton = document.createElement("button");
  const cancelDeleteButton = document.createElement("button");

  // Appending elements
  main.append(deleteModalWrapper);
  deleteModalWrapper.append(deleteModal);
  deleteModal.append(deleteMessage, deleteModalButtonsContainer);
  deleteModalButtonsContainer.append(confirmDeleteButton, cancelDeleteButton);

  // Populating elements
  deleteMessage.textContent = `Are you sure you want to delete "${bookTitle}"?`;
  confirmDeleteButton.textContent = "Confirm";
  cancelDeleteButton.textContent = "Cancel";

  // Adding class names
  deleteModalWrapper.classList.add("delete-modal-wrapper");
  deleteModalWrapper.classList.add("delete-modal--active");
  deleteModal.classList.add("delete-modal");
  deleteModalButtonsContainer.classList.add("delete-modal__buttons-container");
  confirmDeleteButton.classList.add("delete-modal__confirm-button");
  cancelDeleteButton.classList.add("delete-modal__cancel-button");

  // Adding event listeners
  cancelDeleteButton.addEventListener("click", () => {
    deleteModalWrapper.classList.remove("delete-modal--active");
    console.log("from cancel");
  });
  confirmDeleteButton.addEventListener("click", async () => {
    await deleteBook(bookID);
    await renderBooks();
    deleteModalWrapper.classList.remove("delete-modal--active");
  });
};

// ----------------------------------------------------------

export const displayEditModal = async (currentDetails) => {
  const main = document.querySelector("main");
  const statusOptions = ["Reading", "Finished", "Stopped"];

  // Creating elements
  const editModalWrapper = document.createElement("div");
  const editForm = document.createElement("form");
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
  const titleError = document.createElement("span");
  const authorError = document.createElement("span");
  const dateError = document.createElement("span");
  const statusError = document.createElement("span");
  const submitEditButton = document.createElement("button");
  const cancelEditButton = document.createElement("button");
  const defaultStatusOption = document.createElement("option");

  // Appending elements
  main.append(editModalWrapper);
  editModalWrapper.append(editForm);
  editForm.append(
    bookTitleContainer,
    bookAuthorContainer,
    bookStartingDateContainer,
    bookReadingStatusContainer,
    submitEditButton,
    cancelEditButton
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
  bookReadingStatusSelect.append(defaultStatusOption);
  // Adding attributes
  bookStartingDateInput.type = "date";
  bookTitleLabel.htmlFor = "title";
  bookAuthorLabel.htmlFor = "author";
  bookStartingDateLabel.htmlFor = "date";
  bookReadingStatusLabel.htmlFor = "status";
  bookTitleInput.id = "title";
  bookAuthorInput.id = "author";
  bookStartingDateInput.id = "date";
  bookReadingStatusSelect.id = "status";
  bookTitleInput.name = "title";
  bookAuthorInput.name = "author";
  bookStartingDateInput.name = "date";
  bookReadingStatusSelect.name = "status";
  // Adding class names
  editModalWrapper.classList.add("edit-modal-wrapper");
  editModalWrapper.classList.add("edit-modal--active");
  editForm.classList.add("edit-form");
  bookTitleInput.classList.add("edit-form__title-input");
  bookAuthorInput.classList.add("edit-form__author-input");
  bookStartingDateInput.classList.add("edit-form__date-input");
  bookReadingStatusSelect.classList.add("edit-form__status-select");
  titleError.classList.add("edit-form__title-error");
  authorError.classList.add("edit-form__author-error");
  dateError.classList.add("edit-form__date-error");
  statusError.classList.add("edit-form__dtatus-error");
  submitEditButton.classList.add("edit-form__submit-button");
  cancelEditButton.classList.add("edit-form__cancel-button");

  // Populating the edit form with current details
  bookTitleLabel.textContent = "Title";
  bookAuthorLabel.textContent = "Author";
  bookStartingDateLabel.textContent = "Starting date";
  bookReadingStatusLabel.textContent = "Status";
  submitEditButton.textContent = "Confirm edit";
  cancelEditButton.textContent = "Cancel edit";
  defaultStatusOption.textContent = "Select reading status";
  defaultStatusOption.value = "";
  statusOptions.forEach((option) => {
    const statusOption = document.createElement("option");
    statusOption.textContent = option;
    statusOption.value = option.toLocaleLowerCase();
    bookReadingStatusSelect.append(statusOption);
  });
  populateEditForm(currentDetails);
  // Adding event listeners
  cancelEditButton.addEventListener("click", (e) => {
    e.preventDefault();
    editModalWrapper.remove();
    editForm.reset();
  });
  submitEditButton.addEventListener("click", async (e) => {
    e.preventDefault();
    if (!validateEditForm()) {
      return;
    }
    await editBook(currentDetails.id);
    editModalWrapper.remove();

    editForm.reset();
    renderBooks();
  });
};
