export const displayFilterSort = () => {
  const main = document.querySelector("main");

  const filterCriteria = ["Reading", "Finished", "Stopped"];
  const sortCriteria = [
    "Ascending (A-Z)",
    "Descending (Z-A)",
    "Newest Entries",
    "Oldest Entries",
  ];
  // Creating elements
  const sortFilterComponent = document.createElement("div");
  const sortFilterWrapper = document.createElement("div");
  const sortContainer = document.createElement("div");
  const filterContainer = document.createElement("div");
  const filterLabel = document.createElement("label");
  const sortLabel = document.createElement("label");
  const filterSelect = document.createElement("select");
  const sortSelect = document.createElement("select");
  const filterPlaceHolderOption = document.createElement("option");
  const sortPlaceHolderOption = document.createElement("option");
  // Appending elements
  main.append(sortFilterComponent);
  sortFilterComponent.append(sortFilterWrapper);
  sortFilterWrapper.append(sortContainer, filterContainer);
  filterContainer.append(filterLabel, filterSelect);
  sortContainer.append(sortLabel, sortSelect);
  filterSelect.append(filterPlaceHolderOption);
  sortSelect.append(sortPlaceHolderOption);

  // Adding attributes
  filterLabel.id = "filter";
  sortLabel.id = "sort";
  filterSelect.id = "filter";
  sortSelect.id = "sort";
  filterSelect.name = "filter";
  sortSelect.name = "sort";

  // Populating elements
  filterLabel.textContent = "Filter";
  sortLabel.textContent = "Sort";
  filterPlaceHolderOption.textContent = "Select filter criteria";
  sortPlaceHolderOption.textContent = "Select sort criteria";
  filterCriteria.forEach((criteria) => {
    const option = document.createElement("option");
    option.textContent = criteria;
    option.value = criteria.toLocaleLowerCase();
    filterSelect.append(option);
  });
  sortCriteria.forEach((criteria) => {
    const option = document.createElement("option");
    option.textContent = criteria;
    option.value = criteria.toLocaleLowerCase();
    sortSelect.append(option);
  });

  // Adding classnames
  sortFilterComponent.classList.add("sort-filter");
  sortFilterWrapper.classList.add("sort-filter-wrapper");
  sortContainer.classList.add("sort");
  filterContainer.classList.add("filter");
};
