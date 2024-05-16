document.addEventListener('DOMContentLoaded', () => {
    
    const registroForm = document.getElementById('registroForm');

        registroForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        window.location.href = '../public_page/login.html';
    });
});