import { states } from "../data/states.js";
import { renderStates, handleGuessState, handleAddToFavorites, handleDeleteFromFavorites } from "./states.js"

// conditional: if there is something in local storage renderStates(stuff from local strage) otherwise renderstates(original data)



let statesJSON = localStorage.getItem('statesJSON');
if (statesJSON) {
    statesJSON = JSON.parse(statesJSON); 
} else {
    statesJSON = states;
    localStorage.setItem("statesJSON", JSON.stringify(statesJSON)); 
}



renderStates(statesJSON);

handleGuessState(states)

setupEventListeners();

function setupEventListeners() {
const statesGrid = document.querySelector('.js-states-grid');
statesGrid.addEventListener('click', handleAddToFavorites);
statesGrid.addEventListener('click', handleDeleteFromFavorites);
}

