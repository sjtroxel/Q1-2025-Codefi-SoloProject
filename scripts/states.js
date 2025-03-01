export let favorites = [];

// logic and rendering is working for home => favorites. But when hom reloads we are not rendering any saved data. we are rendering the original hardcoded data


export function renderStates(liststates) {
  const statesHTML = liststates
    .map((state) => {
      if (state.show) {
        return `
              <div class="state-container">
                      <div class="tools">
                          <div class="circle">
                              <button class="green button js-add-to-favorites" data-state-id="${state.id}" data-state-name="${state.name}"></button>
                          </div>
                          <div class="circle">
                              <button class="red button js-delete-from-favorites" data-state-id="${state.id}"></button>
                          </div>
                      </div>
                      <div class="cardContent">${state.name}
                      </div>
              </div>
               `;
      }
    })
    .join("");

    

  const statesGrid = document.querySelector(".js-states-grid");
  statesGrid.innerHTML = statesHTML;

  
}

export function handleGuessState(states) {
  const searchInput = document.querySelector(".search-bar");

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      states.forEach((s) => {
        const searchValue = searchInput.value.trim().toLowerCase();

        if (s.name.toLowerCase() === searchValue) {
          s.show = true;
          
        } else '';
      });
      searchInput.value = "";
    }
    const filteredStates = states.filter((state) => state.show === true);
    renderStates(filteredStates);
  });
}


export function handleAddToFavorites(event) {
  if (!event.target.classList.contains('js-add-to-favorites')) return;

  
  const id = event.target.dataset.stateId;
  const name = event.target.dataset.stateName
  const show = true
  console.log(id, name, show);

  // const favObject = {
  //   stateId: event.target.dataset.stateId,
  // stateName:  event.target.dataset.stateName,
  //  stateShow: true
  // }
  // console.log(favObject);
  
  // const favoritesCount = document.getElementById('js-favorites-count');

  const alreadyFavorite = favorites.some((fav) => fav.id === id);
  if (!alreadyFavorite) {
    favorites.push({ id, name, show  });
    localStorage.setItem( 'favorites', JSON.stringify(favorites))
    // favoritesCount.textContent = favorites.length;
    alert('State added to favorites!');     // *** add a favorites property to states array like show? ***
  } else {
    alert('State is already in favorites.');
  }
}

export function handleDeleteFromFavorites(event) {
  if (!event.target.classList.contains('js-delete-from-favorites')) return;

  const id = event.target.dataset.stateId;
  const name = event.target.dataset.stateName;

  
  const index = favorites.findIndex((fav) => fav.id === id);
  if (index !== -1) {
    favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('State removed from favorites!');
  } else {
    alert('State is not in favorites.');
  }
}


// some error handling in this function would be good like returning a message if one doesnt exist 

// CREATE is needed -- pushing to your visiting bucket list 
// READ is complete -- 
// DELETE is needed -- item at click {{index at click}} states.splice(index at click, 1) || filtered array return everything that is NOT == to click
// every item has an id, so that id can be used to const everyStateExceptTheOneAtClick = states.filter(s => s.id !== click.dataset.id)