
const pokeAPI = "https://pokeapi.co/api/v2/pokemon/";
const IMGPATH = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/1.png"




getPokemon(pokeAPI)
async function getPokemon(url) {
    const res = await fetch(url);
    console.log(res)
    const data = await res.json();
    console.log(data)
    const pokemons = data.results
    displayPokemons(pokemons)
}

const PokeHTML = document.getElementById("main");

// show pokemon

function displayPokemons (pokemons) {
   console.log(pokemons)
   PokeHTML.innerHTML = ""

    pokemons.forEach((pokemon) => {
       const PokeEl = document.createElement("div");
        PokeEl.classList.add("pokemon");
        PokeEl.innerHTML = `
        <div> class="card">
            <img class="card-image" src="${pokemons.image}"/>
            <h2 class="card-title">${pokemons.id}. ${pokemons.name}</h2>
            <p class="card-subtitle">Type: ${pokemons.type}</p>
        </div>
        `
        PokeHTML.appendChild(PokeEl)
    })

}    