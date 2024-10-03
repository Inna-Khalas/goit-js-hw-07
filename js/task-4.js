const form = document.querySelector('.login-form');
// form.children.classList.add("input-name")
form.addEventListener("submit", handleSubmit);
const labels = document.querySelectorAll('label');
labels.forEach(label => label.classList.add("input-name"));
const inputAll = document.querySelectorAll('input');
inputAll.forEach(input => input.classList.add("input-form"));
const loginBtn = document.querySelector('button');
loginBtn.classList.add("login-btn")

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (!login || !password) {
        return alert('All form fields must be filled in');
    }
    const userData = {
        email: login,
        password: password
    };
    console.log(userData);

    console.log(`Login: ${login}, Password: ${password}`);
    form.reset();
}
