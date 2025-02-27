import { renderStates } from "./states.js";
console.log('connected to favorites.js')
// import {favorites} from './states.js'

let favorites = ''

console.log(favorites);

favorites = JSON.parse(localStorage.getItem("favorites"))

console.log(favorites);

renderStates(favorites)

