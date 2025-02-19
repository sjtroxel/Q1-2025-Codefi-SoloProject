renderStates(states);

setupEventListeners();

function setupEventListeners() {
    const searchButton = document.querySelector('.search-icon');
    searchButton.addEventListener('click', handleSearchState);
}