
const container = document.getElementById('all-cards-container')

function flipCard () {
    this.classList.toggle('flip')
}



// // /* -------------------- API ------------------- */


const pkmNumber = 151

async function fetchPkm() {
    for (let i = 1; i <= pkmNumber; i++){
        await getPkm(i)

    }
}

async function getPkm(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const pokemon = await res.json()
    const spec = await getSpec(id)
    createPokemonCard(pokemon,spec)
}

async function getSpec(id) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`
    const res = await fetch(url)
    const spec = await res.json()
    return spec 
}


function createPokemonCard(pokemon, spec) {
    let pokemonEl = document.createElement('div')
    pokemonEl.classList.add('poke-card')
    pokemonEl.addEventListener('click', flipCard)
    let types = []

    for(let i = 0; i < pokemon.types.length; i++){
        let type = pokemon.types[i].type.name
        if(type === "bug"){
            types.push(`<img src="images/bug-type.png">`)
        } else if (type === "dark"){
            types.push(`<img src="images/dark-type.png">`)
        } else if (type === "dragon"){
            types.push(`<img src="images/dragon-type.png">`)
        } else if (type === "electric"){
            types.push(`<img src="images/electric-type.png">`)
        } else if (type === "fairy"){
            types.push(`<img src="images/fairy-type.png">`)
        } else if (type === "fighting"){
            types.push(`<img src="images/fight-type.png">`)
        } else if (type === "fire"){
            types.push(`<img src="images/fire-type.png">`)
        } else if (type === "flying"){
            types.push(`<img src="images/flying-type.png">`)
        } else if (type === "ghost"){
            types.push(`<img src="images/ghost-type.png">`)
        } else if (type === "grass"){
            types.push(`<img src="images/grass-type.png">`)
        } else if (type === "ground"){
            types.push(`<img src="images/ground-type.png">`)
        } else if (type === "ice"){
            types.push(`<img src="images/ice-type.png">`)
        } else if (type === "normal"){
            types.push(`<img src="images/normal-type.png">`)
        } else if (type === "psychic"){
            types.push(`<img src="images/psychic-type.png">`)
        } else if (type === "rock"){
            types.push(`<img src="images/rock-type.png">`)
        } else if (type === "steel"){
            types.push(`<img src="images/steel-type.png">`)
        } else if (type === "water"){
            types.push(`<img src="images/water-type.png">`)
        } else if (type === "poison"){
            types.push(`<img src="images/poison-type.png">`)
        }

        let typeColor = pokemon.types[0].type.name 
        if(typeColor === "bug"){
            pokemonEl.classList.add('bug')
        } else if (typeColor === "dark"){
            pokemonEl.classList.add('dark')
        } else if (typeColor === "dragon"){
            pokemonEl.classList.add('dragon')
        } else if (typeColor === "electric"){
            pokemonEl.classList.add('electric')
        } else if (typeColor === "fairy"){
            pokemonEl.classList.add('fairy')
        } else if (typeColor === "fighting"){
            pokemonEl.classList.add('fight')
        } else if (typeColor === "fire"){
            pokemonEl.classList.add('fire')
        } else if (typeColor === "flying"){
            pokemonEl.classList.add('flying')
        } else if (typeColor === "ghost"){
            pokemonEl.classList.add('ghost')
        } else if (typeColor === "grass"){
            pokemonEl.classList.add('grass')
        } else if (typeColor === "ground"){
            pokemonEl.classList.add('ground')
        } else if (typeColor === "ice"){
            pokemonEl.classList.add('ice')
        } else if (typeColor === "normal"){
            pokemonEl.classList.add('normal')
        } else if (typeColor === "psychic"){
            pokemonEl.classList.add('psychic')
        } else if (typeColor === "rock"){
            pokemonEl.classList.add('rock')
        } else if (typeColor === "steel"){
            pokemonEl.classList.add('steel')
        } else if (typeColor === "water"){
            pokemonEl.classList.add('water')
        } else if (typeColor === "poison"){
            pokemonEl.classList.add('poison')
        }

    }

    let description = spec.flavor_text_entries[2].flavor_text.replaceAll('\f', ' ')
    let nonShiny = pokemon.sprites.front_default
    let shiny = pokemon.sprites.front_shiny
    let habitat = spec.habitat.name


    const cardInnerHtml = `
        <div class="back-face">
            <img src="${pokemon.sprites.other["official-artwork"].front_default}">
            <h1>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
            <div class="types">
                ${types.join('')}
            </div>
        </div>
        <div class="front-face">
            <h3>Sprites</h3>
            <div class="sprites">
                <img src="${nonShiny}">
                <img src="${shiny}">
            </div>
            <div class="back-text">
                <h3>Description</h3>
                <span>${description}</span>
                <h3>Habitat</h3>
                <span>${habitat.charAt(0).toUpperCase() + habitat.slice(1)}</span>
            </div>
        </div>
    `
    pokemonEl.innerHTML = cardInnerHtml
    container.appendChild(pokemonEl)

}

fetchPkm()
