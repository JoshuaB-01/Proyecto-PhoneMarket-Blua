
import { navbarComponent } from "../componentes/navbar.js";
import { footerComponent } from "../componentes/footer.js";

let navContainer = document.querySelector('header');
let footerContainer = document.querySelector('footer');

window.addEventListener('load', () => {
    navContainer.innerHTML = navbarComponent;
    footerContainer.innerHTML = footerComponent;

    const navbarRedirectButton = document.getElementById('navbarRedirectButton');
    navbarRedirectButton.addEventListener('click', () => {
        window.location.href = '../public_page/login.html';
    });

    const cartButton = document.getElementById('cartButton');
    cartButton.addEventListener('click', () => {
        window.location.href = '../private_page/compras.html';
    });

    const categoria = document.getElementById('inputCategoria').value;
    title.textContent = `Phonemarket - ${categoria}`;   

    
});