const input_email = document.getElementById('email');
const input_senha = document.getElementById('senha');
const button_login = document.querySelector('button-login');

button_login.addEventListener('click', () => {
    const email = input_email.value;
    const senha = input_senha.value;

    if (email < 0) {
        input_email.style.border = '1px solid red';
        return;
    } if (senha < 0) {
        input_senha.style.border = '1px solid red';
        return;
    }
});