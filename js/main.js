const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const openMenu = (event) => {
  // функция открывания меню
  menu.classList.add("is-open"); // вешает класс is-open
  mMenuToggle.classList.add("close-menu"); // при открытии меню, вешает класс close-menu, в котором вместо полосок, появляется крестик
  document.body.style.overflow = "hidden"; //запрещаем прокрутку сайта под меню
};
const closeMenu = (event) => {
  // функция закрывания меню
  menu.classList.remove("is-open"); // вешает класс is-open
  mMenuToggle.classList.remove("close-menu"); 
  document.body.style.overflow = ""; //возвращает прокрутку сайта под меню
 
};
mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});