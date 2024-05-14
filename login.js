document.addEventListener("DOMContentLoaded", function() {
   
    const loginForm = document.querySelector('form');

    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href = '../private_page/index.html';
    });
});