import { states } from "../data/states.js";
import {renderStates, handleGuessState, handleAddToFavorites} from "./states.js"

// conditional: if there is something in local storage renderStates(stuff from local strage) otherwise renderstates(original data)

renderStates(states);

handleGuessState(states)

setupEventListeners();

function setupEventListeners() {
const statesGrid = document.querySelector('.js-states-grid');
statesGrid.addEventListener('click', handleAddToFavorites);
}

