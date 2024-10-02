const form = document.querySelector('.login-form');
// form.children.classList.add("input-name")
form.addEventListener("submit", handleSubmit);


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
