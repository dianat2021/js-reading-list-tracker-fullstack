export const displayAddForm = () => {
  const main = document.querySelector("main");
  const statusOptions = ["Reading", "Finished", "Stopped"];
  const addFormContainer = document.createElement("div");
  const addForm = document.createElement("form");
  const addFormInputWrapper = document.createElement("div");
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

  // Appending elements
  main.append(addFormContainer);
  addFormContainer.append(addForm);
  addForm.append(addFormInputWrapper);
  addFormInputWrapper.append(
    bookTitleContainer,
    bookAuthorContainer,
    bookStartingDateContainer,
    bookReadingStatusContainer
  );
  bookTitleContainer.append(bookTitleLabel, bookTitleInput);
  bookAuthorContainer.append(bookAuthorLabel, bookAuthorInput);
  bookStartingDateContainer.append(
    bookStartingDateLabel,
    bookStartingDateInput
  );
  bookReadingStatusContainer.append(
    bookReadingStatusLabel,
    bookReadingStatusSelect
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

  //Adding class names
};
