document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.getElementById('registroForm');

    registroForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const nombre = document.querySelector('input[name="nombre"]').value;
        const apellido = document.querySelector('input[name="apellido"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const pass = document.querySelector('input[name="pass"]').value;
        const date = document.querySelector('input[name="date"]').value;

        
        const usuario = {
            nombre,
            apellido,
            email,
            pass,
            date
        };

        let usuarios = JSON.parse(sessionStorage.getItem('usuariosRegistrados')) || [];
        usuarios.push(usuario);
        sessionStorage.setItem('usuariosRegistrados', JSON.stringify(usuarios));
        window.location.href = '../public_page/login.html';
    });
});