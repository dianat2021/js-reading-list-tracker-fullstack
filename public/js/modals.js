export const displayDeleteModal = () => {
  const main = document.querySelector("main");

  // Creating elements
  const deleteModalWrapper = document.createElement("div");
  console.log(deleteModalWrapper);
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
  deleteMessage.textContent = "Are you sure you want to delete this?";
  confirmDeleteButton.textContent = "Confirm";
  cancelDeleteButton.textContent = "Cancel";

  // Adding class names
  deleteModalWrapper.classList.add("delete-modal-wrapper");
  deleteModal.classList.add("delete-modal");
  deleteModalButtonsContainer.classList.add("delete-modal__buttons-container");
  confirmDeleteButton.classList.add("delete-modal__confirm-button");
  cancelDeleteButton.classList.add("delete-modal__cancel-button");
};
