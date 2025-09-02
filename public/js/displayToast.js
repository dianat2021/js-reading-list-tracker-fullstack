export const displayToast = (error) => {
  const main = document.querySelector("main");
  // Create elements
  const toastOverlay = document.createElement("div");
  const toast = document.createElement("div");
  const errorMessage = document.createElement("p");
  const okButton = document.createElement("button");

  // Appending elements
  main.append(toastOverlay);
  toastOverlay.append(toast);
  toast.append(errorMessage, okButton);

  // Populating elements
  errorMessage.textContent = error;
  okButton.textContent = "OK";

  // Adding class names
  toastOverlay.classList.add("toast-wrapper");
  toast.classList.add("toast");
};
