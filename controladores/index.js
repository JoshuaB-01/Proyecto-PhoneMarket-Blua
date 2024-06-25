
import { navbarComponent } from "../componentes/navbar.js";
import { footerComponent } from "../componentes/footer.js";
import { CardComponent } from "../componentes/card.js";

let navContainer = document.querySelector('header');
let footerContainer = document.querySelector('footer');
let cardContainer = document.querySelector('#cardContainer');

window.addEventListener('load', () => {
    navContainer.innerHTML = navbarComponent;
    footerContainer.innerHTML = footerComponent;

    const navbarRedirectButton = document.getElementById('navbarRedirectButton');
    navbarRedirectButton.addEventListener('click', () => {
        window.location.href = '../public_page/login.html';
    });

    const categoria = document.getElementById('inputCategoria').value;
    title.textContent = `Phonemarket - ${categoria}`;
    

    fetch('../componentes/data.json').then(res => res.json()).then(data => {
        const productos = data.find(e => e.categoria === categoria.toLowerCase()).productos;
        let cardHTML = '<div class="row row-cols-1 row-cols-md-4 g-4 my-4 p-5">';
        productos.forEach(producto => {
            cardHTML = cardHTML + CardComponent(producto);
        });
        cardHTML = cardHTML + '</div>';
        cardContainer.innerHTML = cardHTML;
    })
        .catch(error => {
        console.log(error);
    });
});