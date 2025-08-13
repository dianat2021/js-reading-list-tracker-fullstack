const displayMainContent = () => {
  history.pushState(null, "", "/main");

  const main = document.querySelector("main");
  main.innerHTML = "";

  // Creating elements
  const filterComponent = document.createElement("div");
  const searchContainer = document.createElement("div");
  const statusContainer = document.createElement("div");

  const searchLabel = document.createElement("label");
  const searchInput = document.createElement("input");
  const searchButton = document.createElement("button");
  const statusLabel = document.createElement("label");
  const statusSelect = document.createElement("select");
  const statuses = ["All", "Reading", "Completed", "Stopped"];
  statuses.forEach((status) => {
    const option = document.createElement("option");
    option.textContent = status;
    option.value = status.toLocaleLowerCase();
    statusSelect.append(option);
  });
  // Appending elements
  main.append(filterComponent);
  filterComponent.append(searchContainer, statusContainer);
  searchContainer.append(searchLabel, searchInput, searchButton);
  statusContainer.append(statusLabel, statusSelect);

  // Populating elements and adding class names
  searchLabel.textContent = "Search";
  statusLabel.textContent = "Filter";
  searchButton.textContent = "Search";

  searchLabel.htmlFor = "search";
  statusLabel.htmlFor = "filter";
  searchInput.id = "search";
  statusSelect.id = "filter";

  // Adding class names
  filterComponent.classList.add("filter-component");
  searchInput.classList.add("filter-component__search-input");
  searchButton.classList.add("filter-component__search-button");
  statusSelect.classList.add("filter-component__status-filter");
};

export default displayMainContent;
