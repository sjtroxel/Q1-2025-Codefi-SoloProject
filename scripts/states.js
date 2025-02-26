function renderStates(liststates) {
  const statesHTML = liststates
    .map((state) => {
      if (state.show) {
        return `
             <div class="state-container">
                     <div class="tools">
                     <div class="circle">
                         <button class="green button"></span>
                       </div>
                       <div class="circle">
                         <button class="red button"></span>
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

function handleGuessState(states) {
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

// some error handling in this function would be good like returning a message if one doesnt exist 

// CREATE is needed -- pushing to your visiting bucket list 
// READ is complete -- 
// DELETE is needed -- item at click {{index at click}} states.splice(index at click, 1) || filtered array return everything that is NOT == to click
// every item has an id, so that id can be used to const everyStateExceptTheOneAtClick = states.filter(s => s.id !== click.dataset.id)