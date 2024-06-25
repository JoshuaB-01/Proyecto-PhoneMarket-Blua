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

    fetch('../componentes/data.json').then(res => res.json()).then(data => {
        let cardHTML = '<div class="row row-cols-1 row-cols-md-4 g-4 my-4 p-5">';
        data.forEach(categoria => {
            categoria.productos.slice(0, 2).forEach(producto => {
                cardHTML = cardHTML + CardComponent(producto);
            });
        });
        cardHTML = cardHTML + '</div>';
        cardContainer.innerHTML = cardHTML;
    })
    .catch(error => {
        console.log(error);
    });
});