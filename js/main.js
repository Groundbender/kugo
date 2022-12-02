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



const swiper = new Swiper('.swiper', {
  speed: 400,
  slidesPerView: 3,
  SpaceBetween: 30, 
  // Navigation arrows
  navigation: {
    nextEl: '.sliper-button-next',
    prevEl: '.sliper-button-prev',
  },
  breakpoints: {
    320: {
     
      slidesPerView: 1,
      SpaceBetween: 10, 
    },
    576: {
     
        slidesPerView: 2,
        SpaceBetween: 10, 
      },
    
     
   
  },
  

 
});

let currentModal; // текущее модальное окно
let modalDialog;  // белое диалоговое окно 
let alertModal = document.querySelector("#alert-modal"); // окна с предупреждением
let feedbackModal = document.querySelector("#feedback-modal"); // окна с предупреждением

const modalButtons = document.querySelectorAll("[data-toggle=modal]"); // переключатели модальных окон 
modalButtons.forEach((button) => {
  /* клик по переключателю */
  button.addEventListener ("click", (event) => {  
    event.preventDefault();
    /* определяем текущее открытое окно */      
    currentModal = document.querySelector(button.dataset.target);
    /* открываем текущее окно */
    currentModal.classList.toggle("is-open");
    currentModal.classList.contains("is-open") ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";

    /* назначаем текущее диалоговое окно */
    modalDialog = currentModal.querySelector(".modal-dialog");
    /* отслеживаем клик по окну и пустым областям */
    currentModal.addEventListener("click", (event) => {
      /* если клик в пустую область (не диалоговое окно) */
      if (!event.composedPath().includes(modalDialog)) {
        /* закрываем окно */
        currentModal.classList.remove("is-open");
        currentModal.classList.contains("is-open") ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";


      
        
      }
    


      
    });

  }); 
});
/* ловим событие нажатие на кнопки */
document.addEventListener("keyup", (event) => {
  /* проверяем что это Escape и текущее окно открыто */
  if (event.key == "Escape" && currentModal.classList.contains("is-open")) {
    /* закрываем текущее окно */
    currentModal.classList.toggle("is-open");
}
currentModal.classList.contains("is-open") ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";



});

