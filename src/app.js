// hamburger menu
const hamburger_menu = document.querySelector("#hamburger-menu");
const menu = document.querySelector("#menu");

hamburger_menu.addEventListener("click", function () {
  hamburger_menu.classList.toggle("hamburger-toggle");
  menu.classList.toggle("show-menu");
});
