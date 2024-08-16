const arrowDown = document.querySelector(".nav-list__item--arrow");
const regBtnOpen = document.querySelector(".header__btn");
const regBtnClose = document.querySelector(".reg-close");
const mainBtn = document.querySelector(".main__btn");
const body = document.body;

const animatedElements = document.querySelectorAll(".animated__text");
const animatedElements2 = document.querySelectorAll(".animated__text2");
const animatedElements3 = document.querySelectorAll(".animated__text3");

body.addEventListener("click", (event) => {
  if (!arrowDown.contains(event.target)) {
    // Закриваємо меню
    arrowDown.classList.remove("active"); // Приклад класу для відкриття/закриття меню
  }
});

arrowDown.addEventListener("click", () => {
  arrowDown.classList.toggle("active");
});

function openReg() {
  regBtnOpen.addEventListener("click", () => {
    regBtnOpen.classList.add("active");
  });

  regBtnClose.addEventListener("click", () => {
    regBtnOpen.classList.remove("active");
  });
}
openReg();

// додаєио анімацію тексту відслідковуючи скрол

function animateOnScroll() {
  animatedElements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.1;

    if (elementPosition < screenPosition) {
      element.classList.add("about__header--animation");
    }
  });
  animatedElements2.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.1;

    if (elementPosition < screenPosition) {
      element.classList.add("about__header--animation");
    }
  });
  animatedElements3.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.1;

    if (elementPosition < screenPosition) {
      element.classList.add("about__header--animation");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);

// Swiper

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".company__btn-next",
    prevEl: ".company__btn-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

window.onload = function () {
  window.scrollTo(0, 0);
};
