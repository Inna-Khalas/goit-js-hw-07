const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const title = document.querySelector('h1')
title.classList.add("title")
nameInput.classList.add("input");
nameOutput.classList.add("title");

nameInput.addEventListener("input", (event) => {
    const eventValue = event.currentTarget.value.trim();
    nameOutput.textContent = eventValue ? eventValue : "Anonimus";
});
