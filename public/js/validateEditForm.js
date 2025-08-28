export const validateEditForm = () => {
  const bookTitleInput = document.querySelector(".edit-form__title-input");
  const bookAuthorInput = document.querySelector(".edit-form__author-input");
  const bookStartingDateInput = document.querySelector(
    ".edit-form__date-input"
  );
  const bookReadingStatusSelect = document.querySelector(
    ".edit-form__status-select"
  );
  const titleErrorSpan = document.querySelector(".edit-form__title-error");
  const authorErrorSpan = document.querySelector(".edit-form__author-error");
  const dateErrorSpan = document.querySelector(".edit-form__date-error");
  const statusErrorSpan = document.querySelector(".edit-form__dtatus-error");

  const errors = {
    titleError: "Book title is required",
    authorError: "Book author is required",
    startingDateError: "Starting date is required",
    readingStatusError: "Reading status is required",
  };
  [titleErrorSpan, authorErrorSpan, dateErrorSpan, statusErrorSpan].forEach(
    (errorMsg) => {
      errorMsg.textContent = "";
    }
  );

  let isEditFormValid = true;

  if (!bookTitleInput.value.trim()) {
    titleErrorSpan.textContent = errors.titleError;
    isEditFormValid = false;
  }
  if (!bookAuthorInput.value.trim()) {
    authorErrorSpan.textContent = errors.authorError;
    isEditFormValid = false;
  }
  if (!bookStartingDateInput.value.trim()) {
    dateErrorSpan.textContent = errors.startingDateError;
    isEditFormValid = false;
  }
  if (!bookReadingStatusSelect.value.trim()) {
    statusErrorSpan.textContent = errors.readingStatusError;
    isEditFormValid = false;
  }
  return isEditFormValid;
};
