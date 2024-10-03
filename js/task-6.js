function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");
input.classList.add("controls-Input");
createBtn.classList.add("create-btn");
destroyBtn.classList.add("destroy-btn");
controls.classList.add("controls-box")
boxesContainer.classList.add("boxes-container")
createBtn.addEventListener("click", handleCreateClick);
destroyBtn.addEventListener("click", destroyBoxes);

function handleCreateClick() {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100 || isNaN(amount)) {

    return alert("Будь-ласка введіть число від 1 до 100.");
  }

  boxesContainer.innerHTML = "";

  createBoxes(amount);
  input.value = "";
}

function createBoxes(amount) {
  let boxSize = 30;

  const fragment = Array.from({ length: amount }).reduce((acc) => {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";

    acc.appendChild(box);
    boxSize += 10;
    return acc;
  }, document.createDocumentFragment());

  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

