var pokemonRepository = (function () {
  var pokemonList = [];
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function addListItem(pokemon) {
    var list = document.querySelector(".pokemon-list");
    var listItem = document.createElement("li");
    var button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("list-item-button");
    listItem.appendChild(button);
    list.appendChild(listItem);
    //When you click on a pokemon...
    button.addEventListener("click", () => showDetails(pokemon));
  }
  //add pokemon to the pokemonList
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  //get all pokemon from the list
  function getAll() {
    return pokemonList;
  }

  //load pokemon from the api
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  // when clicked on, load details from the api about the pokemon
  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;

        item.types = [];
        details.types.forEach(function (itemType) {
          item.types.push(itemType.type.name);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //show the loaded details about the pokemon
  function showDetails(item) {
    loadDetails(item).then(function () {
      showModal(item);
    });
  }

  function showModal(item) {
    var modalContainer = document.querySelector("#modal-container");

    modalContainer.innerHTML = "";

    var modal = document.createElement("div");
    modal.classList.add("modal");

    var closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener("click", hideModal);

    var titleElement = document.createElement("h1");
    titleElement.innerText = item.name;

    var imgElement = document.createElement("img");
    imgElement.setAttribute("src", item.imageUrl);

    var contentElement = document.createElement("p");
    contentElement.innerText =
      item.name + "'s height: " + item.height + "   Types: " + item.types;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(imgElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add("is-visible");

    window.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        modalContainer.classList.contains("is-visible")
      ) {
        hideModal();
      }
    });

    modalContainer.addEventListener("click", (e) => {
      var target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  }

  function hideModal() {
    var modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("is-visible");
  }

  return {
    addListItem: addListItem,
    add: add,
    getAll: getAll,
    loadDetails: loadDetails,
    loadList: loadList,
  };
})();

pokemonRepository.loadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
