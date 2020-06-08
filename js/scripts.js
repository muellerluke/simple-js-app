var pokemonRepository = (function(){
  var pokemonList = [
    {name: 'Charizard', height: 1.7, types: ['fire', 'flying']},
    {name: 'Golem', height: 1.4, types: ['rock', 'ground']},
    {name: 'Wailord', height: 14.5, types: ['water']}
  ];

  function add(pokemon) {
    if(typeof pokemon === 'object' && 'name' in pokemon && 'height' in pokemon && 'types' in pokemon) pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})()

function pokedex_output(pokemon){
  document.write(pokemon.name + " (height: " + pokemon.height + ")");
  if (pokemon.height > 10) document.write(" - Wow, that's big! ")
  document.write("<br><br>");
}

pokemonRepository.getAll().forEach(pokedex_output);
