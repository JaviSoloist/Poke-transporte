fetch("https://pokeapi.co/api/v2/generation/1/")
    .then(response => response.json())
    .then(data => {
        let pokemonList = document.getElementById("pokemon-list")
        data.moves.forEach(pokemon => { pokemonList.innerHTML += `<li>${pokemon.name}</li>`          
        });         
    });