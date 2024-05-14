import { navbarComponent } from "./navbar.js";

let navContainer = document.querySelector('header');

window.addEventListener('load', () => {
    navContainer.innerHTML = navbarComponent;

    const navbarRedirectButton = document.getElementById('navbarRedirectButton');
    navbarRedirectButton.addEventListener('click', () => {
        window.location.href = '../public_page/login.html';
    });
});

import { footerComponent } from "./footer.js";
import { cardComponent } from "./card.js";

let footerContainer = document.querySelector('footer');
let cardContainer = document.querySelector('#card');


window.addEventListener('load', () => {
    footerContainer.innerHTML = footerComponent;
    cardContainer.innerHTML = cardComponent;
});

let pageName = document.getElementById('pageName').value;
let title = document.getElementById('title');

window.addEventListener('load', () => {
    title.textContent = `${pageName}`;
    document.title = pageName;
});