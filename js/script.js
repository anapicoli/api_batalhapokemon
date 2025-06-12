let pokemonimg = document.getElementById("pokemonimg");
let pokemonnm = document.getElementById("nm");
let nivel = document.getElementById("nivel");

let pokemonimage = document.getElementById("pokemonimage");
let pokemonnome = document.getElementById("nome");
let pokemonexp = document.getElementById("exp");

let vencedor = document.getElementById("vencedor");

// Busca dados do Pokémon da esquerda
function Pokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) => {
      pokemonimg.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
      pokemonnm.innerText = data.name;
      nivel.innerText = data.base_experience;
      nivel.setAttribute("data-exp", data.base_experience);
    });
}

function Batalha(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) => {
      pokemonimage.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
      pokemonnome.innerText = data.name;
      pokemonexp.innerText = data.base_experience;
      pokemonexp.setAttribute("data-exp", data.base_experience);
    });
}

function batalhar() {
  const pokemons = ["pikachu", "charmander", "squirtle", "bulbasaur", "snorlax", "ivysaur", "fearow", "gengar", "machamp", "dragonite"];

  const p1 = pokemons[Math.floor(Math.random() * pokemons.length)];
  let p2 = pokemons[Math.floor(Math.random() * pokemons.length)];
  while (p1 === p2) {
    p2 = pokemons[Math.floor(Math.random() * pokemons.length)];
  }

  Pokemon(p1);
  Batalha(p2);

  setTimeout(() => {
    const exp1 = parseInt(nivel.getAttribute("data-exp"));
    const exp2 = parseInt(pokemonexp.getAttribute("data-exp"));

    if (!isNaN(exp1) && !isNaN(exp2)) {
      const vencedorNome = exp1 > exp2 ? pokemonnm.innerText : pokemonnome.innerText;
      vencedor.innerText = vencedorNome;
    } else {
      vencedor.innerText = "Erro ao carregar os dados.";
    }
  }, 1000);
}

document.querySelector("button").addEventListener("click", batalhar);

batalhar();
