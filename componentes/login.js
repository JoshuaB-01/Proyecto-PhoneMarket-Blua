document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        const email = document.querySelector('input[name="email"]').value;
        const pass = document.querySelector('input[name="pass"]').value;

        let usuarios = JSON.parse(sessionStorage.getItem('usuariosRegistrados')) || [];
        const usuario = usuarios.find(user => user.email === email && user.pass === pass);

        if (usuario) {
           
            let usuariosActivos = JSON.parse(sessionStorage.getItem('usuariosActivos')) || [];
            usuariosActivos.push({ email: usuario.email, pass: usuario.pass });            
            sessionStorage.setItem('usuariosActivos', JSON.stringify(usuariosActivos));      
            
            window.location.href = '../private_page/home.html';
        } else {
            alert('Email o contraseña incorrectos');
        }
    });
});