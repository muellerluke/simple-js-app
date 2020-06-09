var pokemonRepository = (function(){
  var pokemonList = [
    {name: 'Charizard', height: 1.7, types: ['fire', 'flying']},
    {name: 'Golem', height: 1.4, types: ['rock', 'ground']},
    {name: 'Wailord', height: 14.5, types: ['water']}
  ];

  function addListItem(pokemon) {
    var list = document.querySelector('.pokemon-list');
    var listItem = document.createElement('li');
    var button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('list-item-button');
    listItem.appendChild(button);
    list.appendChild(listItem);
    button.addEventListener('click', () => showDetails(pokemon));
  }

  function add(pokemon) {

  }

  function showDetails(pokemon) {
    console.log('Name: ' + pokemon.name + '\n height: ' + pokemon.height + '\n Types: ' + pokemon.types);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    addListItem: addListItem,
    add: add,
    getAll: getAll
  };
})()

function pokedex_output(pokemon){
  pokemonRepository.addListItem(pokemon);
}

pokemonRepository.getAll().forEach(pokedex_output);
