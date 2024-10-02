const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener("input", (event) => {
    const eventValue = event.currentTarget.value.trim();
    nameOutput.textContent = eventValue ? eventValue : "Anonimus";
});
