document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.button-toggle');
    const toggle = document.querySelector('.toggle');
    const body = document.body;

    if (localStorage.getItem("modoEscuro") === "true") {
        toggle.classList.add('ativado');
        body.classList.add('dark-mode');
    } else {
        toggle.classList.add('desativado');
        body.classList.add('light-mode');
    }

    toggleButton.addEventListener('click', function() {
        if (toggle.classList.contains('ativado')) {
            toggle.classList.remove('ativado');
            toggle.classList.add('desativado');

            body.classList.remove('dark-mode');
            body.classList.add('light-mode');

            localStorage.setItem("modoEscuro", "false");
        } else {
            toggle.classList.remove('desativado');
            toggle.classList.add('ativado');

            body.classList.remove('light-mode');
            body.classList.add('dark-mode');

            localStorage.setItem("modoEscuro", "true");
        }
    });
});