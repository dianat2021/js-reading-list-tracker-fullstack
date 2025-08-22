export const validateAddBook = () => {
  const addFormTitleInput = document.querySelector(".add-form__title-input");
  const addFormAuthorInput = document.querySelector(".add-form__author-input");
  const addFormDateInput = document.querySelector(".add-form__date-input");
  const addFormStatusSelect = document.querySelector(
    ".add-form__status-select"
  );
  const addFormTitleError = document.querySelector(".add-form__title-error");
  const addFormAuthorError = document.querySelector(".add-form__author-error");
  const addFormDateError = document.querySelector(".add-form__date-error");
  const addFormStatusError = document.querySelector(".add-form__status-error");

  const addFormErrors = {
    titleError: "Book title is required",
    authorError: "Book author is required",
    dateError: "Book date is required",
    statusError: "Book status is required",
  };

  let isAddFormValid = true;

  [
    addFormTitleError,
    addFormAuthorError,
    addFormDateError,
    addFormStatusError,
  ].forEach((errorMsg) => {
    errorMsg.textContent = "";
    errorMsg.classList.remove("add-form__input--error");
  });

  if (!addFormTitleInput.value.trim()) {
    addFormTitleError.textContent = addFormErrors.titleError;
    addFormTitleError.classList.add("add-form__input--error");
    isAddFormValid = false;
  }
  if (!addFormAuthorInput.value.trim()) {
    addFormAuthorError.textContent = addFormErrors.authorError;
    addFormAuthorError.classList.add("add-form__input--error");
    isAddFormValid = false;
  }
  if (!addFormDateInput.value.trim()) {
    addFormDateError.textContent = addFormErrors.dateError;
    addFormDateError.classList.add("add-form__input--error");
    isAddFormValid = false;
  }
  if (!addFormStatusSelect.value.trim()) {
    addFormStatusError.textContent = addFormErrors.statusError;
    addFormStatusError.classList.add("add-form__input--error");
    isAddFormValid = false;
  }
  return isAddFormValid;
};
