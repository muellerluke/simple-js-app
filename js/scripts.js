var pokemonList = [
  {name: 'Charizard', height: 1.7, types: ['fire', 'flying']},
  {name: 'Golem', height: 1.4, types: ['rock', 'ground']},
  {name: 'Wailord', height: 14.5, types: ['water']}
];

function pokedex_output(pokemon){
  document.write(pokemon.name + " (height: " + pokemon.height + ")");
  if (pokemon.height > 10) document.write(" - Wow, that's big! ")
  document.write("<br><br>");
}

pokemonList.forEach(pokedex_output);
