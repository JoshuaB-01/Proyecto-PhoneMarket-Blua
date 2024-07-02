document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

        loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        const email = document.querySelector('input[name="email"]').value;
        const pass = document.querySelector('input[name="pass"]').value;

        fetch('../componentes/usuarios.json') .then(response => response.json()).then(usuarios => {
            
            const usuario = usuarios.find(user => user.email === email && user.password === pass);

            if (usuario) {
                window.location.href = '../private_page/home.html';
            } else {
                alert('Email o contraseña incorrectos');
            }
        })
        .catch(error => {
            console.error('Error de usuarios', error);
        });
    });
});