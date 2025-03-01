import { states } from "../data/states.js";
import {renderStates, handleGuessState, handleAddToFavorites, handleDeleteFromFavorites} from "./states.js"

// conditional: if there is something in local storage renderStates(stuff from local strage) otherwise renderstates(original data)

let statesJSON = '';

let statesData = localStorage.getItem('statesJSON');
    if (statesData) {
        statesJSON = statesData
    } else {
        statesJSON = '';
        localStorage.setItem("statesJSON", JSON.stringify(statesJSON));
    }



renderStates(states);

handleGuessState(states)

setupEventListeners();

function setupEventListeners() {
const statesGrid = document.querySelector('.js-states-grid');
statesGrid.addEventListener('click', handleAddToFavorites);
}

