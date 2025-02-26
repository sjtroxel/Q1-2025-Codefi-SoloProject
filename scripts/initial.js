renderStates(states);

handleGuessState(states)

setupEventListeners();

function setupEventListeners() {
const statesGrid = document.querySelector('.js-states-grid');
statesGrid.addEventListener('click', handleAddToFavorites);
}

