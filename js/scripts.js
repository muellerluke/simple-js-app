var pokemonList = [
  {name: 'Charizard', height: 1.7, types: ['fire', 'flying']},
  {name: 'Golem', height: 1.4, types: ['rock', 'ground']},
  {name: 'Wailord', height: 14.5, types: ['water']}
];

for (var i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
  if (pokemonList[i].height > 10) document.write(" - Wow, that's big! ")
  document.write("<br><br>");
}
