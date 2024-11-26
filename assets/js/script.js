var headerEl = $("#headerEl");
var dashboardEl = $("#dashboardEl");
var footerEl = $("#footerEl");

var startBtn = $("#startBtn");
var pokeballBottomEl = $("#pokeballBottomEl");

var cardEl = $("#cardEl");
var cardfaceEl = $("#cardfaceEl");
var unown = $("#unown");
var titleEl = $("#titleEl");
var nameEl = $("#nameEl");
var hpEl = $("#hpEl");
var pkmnImg = $("#pkmnImg");
var detailRibbonEL = $("#detailRibbonEl");
var moveNodeEl = $("#moveNodeEl");
var baseMoveEl = $("#baseMoveEl");
var specialNodeEl = $("#specialNodeEl");
var attackEl = $("#attackEl");
var specialMoveEl = $("#specialMoveEl");
var specialAttackEl = $("#specialAttackEl");
var cardFooterEl = $("#cardFooterEl");
var abilityEl = $("#abilityEl");
var infoBoxEl = $("#infoBoxEl");
var cardBottomEl = $("#cardBottomEl");

var pokemonOptionsEl = $("#pokemonOptionsEl");
var cardOptionsEl = $("#cardOptionsEl");

var currentPokemon = 0;
var currentPokemonData = {};
var currentPokemonType = "";

startBtn.click(function () {
  headerEl.attr("style", "flex-grow:0;");
  footerEl.attr("style", "flex-grow:0; animation-name: footer;");
  dashboardEl.attr("style", "display: flex; flex-grow: 1;");
  startBtn.attr(
    "style",
    "margin-bottom: 0; transition: 0.5s; transition-delay: 1s;"
  );
  pokeballBottomEl.attr(
    "style",
    "margin-top: 5rem; transition: 0.5s; transition-delay: 1s; height: 0;"
  );
});

function getPokemon(i) {
  var requestUrl = "https://pokeapi.co/api/v2/pokemon/" + i + "/";
  fetch(requestUrl)
    .then(function (response) {
      if (response.status === 404) {
        console.log("404");
      } else {
        return response.json();
      }
    })
    .then(function (data) {
      currentPokemon = data.id;
      currentPokemonData = data;
      currentPokemonType = data.types[0].type.name;
      displayPokemon(data);
    });
}

function getRandomPokemon() {
  var x = Math.floor(Math.random() * 1024) + 1;
  getPokemon(x);
}

function displayPokemon(data) {
  cardEl.attr("class", "card");
  cardfaceEl.attr("class", "cardface");
  titleEl.css("display", "flex");
  unown.css("display", "none");
  pkmnImg.css("display", "flex");
  detailRibbonEL.css("display", "flex");
  moveNodeEl.css("display", "flex");
  specialNodeEl.css("display", "flex");
  cardFooterEl.css("display", "flex");
  infoBoxEl.css("display", "flex");
  cardBottomEl.css("display", "flex");

  nameEl.text(
    data.name
      .split(" ")
      .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
      .join(" ")
  );
  detailRibbonEL.text(
    data.types[0].type.name
      .split(" ")
      .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
      .join(" ") +
      " Pokemon. HT: " +
      data.height / 10 +
      " m, WT: " +
      data.weight / 10 +
      " kg."
  );
  hpEl.text(data.stats[0].base_stat + " HP");
  var artworkUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
    data.id +
    ".png";
  pkmnImg.attr("src", artworkUrl);
  baseMoveEl.text(
    data.moves[0].move.name
      .split(" ")
      .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
      .join(" ")
  );
  attackEl.text(data.stats[1].base_stat);
  specialMoveEl.text(
    data.moves[1].move.name
      .split(" ")
      .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
      .join(" ")
  );
  specialAttackEl.text(data.stats[3].base_stat);
  infoBoxEl.text(
    " EXP. " +
      data.base_experience +
      "  Speed: " +
      data.stats[5].base_stat +
      "  #" +
      data.id
  );
  abilityEl.text(
    "Special Ability: " +
      data.abilities[0].ability.name
        .split(" ")
        .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
        .join(" ")
  );

  if (currentPokemonType == "dark") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg, black, rgb(37, 37, 37), black); color: white;"
    );
    detailRibbonEL.attr("style", "color: black");
    imgContainerEl.attr("style", "color: black");
  } else if (currentPokemonType == "fire") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg, red, rgb(163, 0, 0), red)"
    );
  } else if (currentPokemonType == "electric") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg, gold, yellow, gold)"
    );
  } else if (currentPokemonType == "grass") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg, green, rgb(0, 114, 0), green)"
    );
  } else if (currentPokemonType == "bug") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg, green, rgb(0, 249, 0), green"
    );
  } else if (currentPokemonType == "water") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg, blue, rgb(48, 86, 255), blue)"
    );
  } else if (currentPokemonType == "ice") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg, blue, white, blue)"
    );
  } else if (currentPokemonType == "psychic") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg, purple, rgb(225, 0, 225), purple)"
    );
  } else if (currentPokemonType == "ghost") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg,rgb(102, 0, 102),rgb(128, 0, 188),rgb(93, 0, 93))"
    );
  } else if (currentPokemonType == "poison") {
    cardEl.attr(
      "style",
      " background-image: linear-gradient(135deg,rgb(54, 0, 124),rgb(129, 33, 255),rgb(54, 0, 124))"
    );
  } else if (currentPokemonType == "steel") {
    cardEl.attr(
      "style",
      " background-image: linear-gradient(135deg,rgb(80, 80, 80),white,rgb(80, 80, 80))"
    );
  } else if (currentPokemonType == "normal") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg, rgb(228, 228, 228),rgb(186, 186, 186), rgb(228, 228, 228))"
    );
  } else if (currentPokemonType == "flying") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg, rgb(228, 228, 228),rgb(186, 186, 186), rgb(228, 228, 228))"
    );
  } else if (currentPokemonType == "ground") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg,rgb(146, 95, 0),orange,rgb(146, 95, 0))"
    );
  } else if (currentPokemonType == "rock") {
    cardEl.attr(
      "style",
      " background-image: linear-gradient(135deg,rgb(146, 73, 0),orange,rgb(146, 73, 0))"
    );
  } else if (currentPokemonType == "fairy") {
    cardEl.attr(
      "style",
      "  background-image: linear-gradient(135deg,rgb(255, 120, 255),pink,rgb(255, 120, 255))"
    );
  } else if (currentPokemonType == "dragon") {
    cardEl.attr(
      "style",
      " background-image: linear-gradient(135deg,rgb(146, 73, 0),orange,rgb(146, 73, 0))"
    );
  } else if (currentPokemonType == "fighting") {
    cardEl.attr(
      "style",
      " background-image: linear-gradient(135deg,rgb(146, 73, 0),orange,rgb(146, 73, 0))"
    );
  } else {
    cardEl.attr("style", "background-color: magenta");
  }
}

unown.click(getRandomPokemon);

cardOptionsEl.click(function () {
  console.log(currentPokemonData);
});

pokemonOptionsEl.click(getRandomPokemon);
