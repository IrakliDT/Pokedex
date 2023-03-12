const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

const cards = document.querySelector('.cards')

const types = [
  "fire",
  "grass",
  "electric",
  "water",
  "ground",
  "rock",
  "fairy",
  "poison",
  "bug",
  "dragon",
  "psychic",
  "flying",
  "fighting",
  "normal",
]

const POKEMON_COUNT = 100

getPokemon(API_URL)
async function getPokemon(url) {
  const res = await fetch(url)
  const data = await res.json()
  showPokemon(data.results)
}


function showPokemon(pokemon) {
  console.log(pokemon)
  cards.innerHTML = ''
  pokemon.foreach (pokemon => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    pokemonEl.innerHTML = `
              <div class="card" id="card-{id}">
          <div class="title">
              <h2>{name}</h2>
              <small># {id}</small>
          </div>
          <div class="img bg-{type}">
              <img src="https://pngimg.com/uploads/pokemon/pokemon_PNG125.png" alt="{name}">
          </div>
          <div class="type {type}">
              <p>{type}</p>
          </div>
          `
          cards.appendChild(pokemonEl)
   });

  
}















// const cards = document.querySelector(".cards")

// const replacer = (text, source, destination) => {
//   const regex = new RegExp(source, "gi")
//   return text.replace(regex, destination)
// }

// const createPokemonCard = (pokemon) => {
//   const {
//     id,
//     name,
//     type
//   } = pokemon
//   let newCard = replacer(cardHTML, `\{id\}`, id)
//   newCard = replacer(newCard, `\{name\}`, name)
//   newCard = replacer(newCard, `\{type\}`, type)

//   cards.innerHTML += newCard
// }

// const getType = (data) => {
//   const apitypes = data.map((type) => type.type.name)
//   const type = types.find((type) => apitypes.indexOf(type) > -1)
//   return type
// }

// const fetchPokemon = async (number) => {
//   if (number === undefined) return
//   const url = `https://pokeapi.co/api/v2/pokemon/${number}`
//   const response = await fetch(url).then((response) => response.json())
//   const {
//     id,
//     name,
//     types
//   } = response
//   const type = getType(types)
//   return {
//     id,
//     name,
//     type
//   }
// }

// const fetchPokemons = async () => {
//   for (let i = 1; i <= POKEMON_COUNT; i++) {
//     const pokemon = await fetchPokemon(i)
//     createPokemonCard(pokemon)
//   }
// }


// const types = [
//   "fire",
//   "grass",
//   "electric",
//   "water",
//   "ground",
//   "rock",
//   "fairy",
//   "poison",
//   "bug",
//   "dragon",
//   "psychic",
//   "flying",
//   "fighting",
//   "normal",
// ]
// const POKEMON_COUNT = 100

// const cardHTML = `
// <div class="card" id="card-{id}">
// <div class="title">
//     <h2>{name}</h2>
//     <small># {id}</small>
// </div>
// <div class="img bg-{type}">
//     <img src="https://pngimg.com/uploads/pokemon/pokemon_PNG125.png" alt="{name}">
// </div>
// <div class="type {type}">
//     <p>{type}</p>
// </div>
// `

// fetchPokemons()