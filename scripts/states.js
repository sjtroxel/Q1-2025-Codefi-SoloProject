function renderStates(liststates) {
    const statesHTML = liststates
      .map((state) => `
        <div class="state-container">
                <div class="tools">
                  <div class="circle">
                    <span class="red box"></span>
                  </div>
                  <div class="circle">
                    <span class="yellow box"></span>
                  </div>
                  <div class="circle">
                    <span class="green box"></span>
                  </div>
                </div>
                <div class="cardContent">${state.name}
                </div>
              </div>
      `)
      .join("");
  
    const statesGrid = document.querySelector('.js-states-grid');
    statesGrid.innerHTML = statesHTML;
  }
  
  function handleSearchState() {
    const searchInput = document.querySelector('.search-bar');
    const searchValue = searchInput.value.trim().toLowerCase();
  
    const filteredStates = states.filter((state) =>
      state.name.toLowerCase() === (searchValue)
    );
  
    renderStates(filteredStates);
  }