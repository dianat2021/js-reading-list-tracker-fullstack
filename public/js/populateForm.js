// This function is triggered when the edit button is pressed to populate the form
// with the current details of the book being edited

export const populateForm = async (currentDetails) => {
  const titleInput = document.querySelector(".add-form__title-input");
  const authorInput = document.querySelector(".add-form__author-input");
  const dateInput = document.querySelector(".add-form__date-input");
  const statusSelect = document.querySelector(".add-form__status-select");

  const { title, author, date, status } = currentDetails;
  titleInput.value = title;
  authorInput.value = author;
  dateInput.value = date.slice(0, 10);
  statusSelect.value = status;
};
