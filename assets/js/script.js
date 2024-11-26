var headerEl = $("#headerEl");
var dashboardEl = $("#dashboardEl");
var footerEl = $("#footerEl");

var startBtn = $("#startBtn");
var pokeballBottomEl = $("#pokeballBottomEl");

var cardEl = $("#cardEl");
var cardfaceEl = $("#cardfaceEl");
var nameEl = $("#nameEl");
var hpEl = $("#hpEl");
var pkmnImg = $("#pkmnImg");
var detailRibbonEL = $("#detailRibbonEl");
var moveNodeEl = $("#moveNodeEl");
var baseMoveEl = $("#baseMoveEl");
var attackEl = $("# attackEl");
var specialMoveEl = $("#spacialMoveEl");
var specialAttackEl = $("#specialAttackEl");
var cardFooterEl = $("#cardFooterEl");
var abilityEl = $("#abilityEl");
var infoBoxEl = $("#infoBoxEl");
var cardBottomEl = $("#cardBottomEl");

var pokemonOptionsEl = $("#pokemonOptionsEl");
var cardOptionsEl = $("#cardOptionsEl");

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
