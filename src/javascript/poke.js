const description = document.getElementById('description');
const id = localStorage.getItem('pokemonId');
const name = localStorage.getItem('pokemonName');
const type = localStorage.getItem('pokemonType');
const image = localStorage.getItem('pokemonImage');

function showPokemon() {
    description.innerHTML = `
   <div class="img-container"> 
        <img src="${image}" alt="${image}">
   </div>
    <div class="info">
        <h2>${name}</h2>
        <p>${type}</p>
        <p>${id}</p>
    </div>
    `
}   

showPokemon();

