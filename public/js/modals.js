import { deleteBook } from "./deleteBook";
import { renderBooks } from "./renderBooks";

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
