var headerEl = $("#headerEl");
var dashboardEl = $("#dashboardEl");
var footerEl = $("#footerEl");

var startBtn = $("#startBtn");

startBtn.click(function () {
  headerEl.attr("style", "flex-grow:0;");
  footerEl.attr("style", "flex-grow:0; animation-name: footer;");
  dashboardEl.attr("style", "flex-grow: 1");
  startBtn.attr(
    "style",
    "margin-bottom: 0; transition: 0.5s; transition-delay: 1s;"
  );
});
