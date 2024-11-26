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
}

unown.click(getRandomPokemon);

cardOptionsEl.click(function () {
  console.log(currentPokemonData);
});

pokemonOptionsEl.click(getRandomPokemon);
