var headerEl = $("#headerEl");
var dashboardEl = $("#dashboardEl");
var footerEl = $("#footerEl");

var startBtn = $("#startBtn");
var cardEl = $("#cardEl");

startBtn.click(function () {
  headerEl.attr("style", "flex-grow:0;");
  footerEl.attr("style", "flex-grow:0; animation-name: footer;");
  dashboardEl.attr("style", "display: flex; flex-grow: 1;");
  startBtn.attr(
    "style",
    "margin-bottom: 0; transition: 0.5s; transition-delay: 1s;"
  );

  //   cardEl.attr(
  //     "style",
  //     "display: flex; width: var(--fs-4);height: var(--fs-5);"
  //   );
});
