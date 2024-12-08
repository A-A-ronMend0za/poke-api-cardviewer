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
var cardfaceEl = $("#cardfaceEl");
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

var pokemonOptionsBtn = $("#pokemonOptionsBtn");
var pokemonMenuEl = $("#pokemonMenuEl");
var cardOptionsBtn = $("#cardOptionsBtn");
var cardMenuIcon = $("#cardMenuIcon");

var currentPokemon = 0;
var currentPokemonData = {};
var currentPokemonType = "";

function openDashboard() {
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
}

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
  lockCardType(currentPokemonType);
}

function lockCardType(currentPokemonType) {
  if (currentPokemonType == "dark") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg, rgb(60, 60, 60), rgb(37, 37, 37), black); color: white;"
    );
    cardfaceEl.css(
      "background-image",
      "conic-gradient(from 90deg at 0% 70%, black, grey, black, silver)"
    );
  } else if (currentPokemonType == "fire") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg, red, rgb(163, 0, 0), red)"
    );
    cardfaceEl.css(
      "background-image",
      "conic-gradient(from 90deg at 0% 70%, brown, orange, yellow, red)"
    );
    cardfaceEl.css("background-color", "orangered");
  } else if (currentPokemonType == "electric") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg, orange, gold, orange)"
    );
    cardfaceEl.css(
      "background-image",
      "conic-gradient(from 90deg at 0% 70%,rgb(75, 48, 48),yellow,orangered,gold)"
    );
  } else if (currentPokemonType == "grass") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg, rgb(0, 100, 0), green, rgb(0, 60, 0))"
    );
    cardfaceEl.css(
      "background-image",
      "conic-gradient(from 90deg at 0% 70%,rgb(0, 90, 0),rgb(80, 22, 22),gold,rgb(0, 174, 255))"
    );
  } else if (currentPokemonType == "bug") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(225deg, green, rgb(0, 249, 0), green, rgb(80, 22, 22)"
    );
    cardfaceEl.css(
      "background-image",
      "conic-gradient(from 90deg at 0% 70%, rgb(0, 90, 0), rgb(80, 22, 22), black, rgb(0, 255, 60))"
    );
  } else if (currentPokemonType == "water") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg, blue, rgb(48, 200, 255), blue)"
    );
    cardfaceEl.css(
      "background-image",
      "conic-gradient(at 50% 70%,aqua,darkcyan,black,cyan,aqua)"
    );
  } else if (currentPokemonType == "ice") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg, blue, white, blue)"
    );
    cardfaceEl.css(
      "background-image",
      "conic-gradient(from 315deg at 55% 72%,white,aqua,black,black,aqua,white)"
    );
  } else if (currentPokemonType == "psychic") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(135deg, purple, rgb(225, 0, 225), purple)"
    );
    cardfaceEl.css(
      "background-image",
      "repeating-radial-gradient(circle,purple,rgb(255, 236, 131) 0.5%,rgb(193, 0, 193) 5%,purple 25%)"
    );
  } else if (currentPokemonType == "ghost") {
    cardEl.attr(
      "style",
      "background-image: linear-gradient(180deg,rgb(102, 0, 102),rgb(128, 0, 188),black); color: whitesmoke; text-shadow: 0 0 0.5rem white, 0 0 1.5rem black, 0 1rem 1rem black;"
    );
    cardfaceEl.css(
      "background-image",
      "radial-gradient(black, rgb(51, 0, 128))"
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

startBtn.click(openDashboard);

// unown.click(getRandomPokemon);
cardfaceEl.click(getRandomPokemon);

pokemonOptionsBtn.click(function () {
  pokemonMenuEl.toggleClass("pokemonMenuEl");
});

cardOptionsBtn.click(function () {
  cardMenuIcon.toggleClass("cardMenu");
});

// pokemonOptionsEl.click(getRandomPokemon);

// openDashboard();
// getRandomPokemon();
