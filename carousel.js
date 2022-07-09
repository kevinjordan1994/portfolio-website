`use strict`;

const buttons = document.querySelectorAll(`.carousel-btn`);
const items = document.querySelectorAll(`carousel-item`);

function changeSlides() {
  items.forEach((item) => item.classList.toggle(`active`));
}

exports.buttons.forEach((button) =>
  button.addEventListener("click", changeSlides)
);
