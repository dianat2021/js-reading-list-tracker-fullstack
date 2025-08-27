// This function is triggered when the edit button is pressed to populate the form
// with the current details of the book being edited

export const populateEditForm = async (currentDetails) => {
  const titleInput = document.querySelector(".edit-form__title-input");
  const authorInput = document.querySelector(".edit-form__author-input");
  const dateInput = document.querySelector(".edit-form__date-input");
  const statusSelect = document.querySelector(".edit-form__status-select");

  const { title, author, date, status } = currentDetails;
  titleInput.value = title;
  authorInput.value = author;
  dateInput.value = date.slice(0, 10);
  statusSelect.value = status;
};
