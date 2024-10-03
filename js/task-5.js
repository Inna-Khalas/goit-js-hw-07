function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".widget .change-color");
const colorSpan = document.querySelector(".widget .color");
const text = document.querySelector("p");
text.classList.add("widget-text");

buttonEl.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});


