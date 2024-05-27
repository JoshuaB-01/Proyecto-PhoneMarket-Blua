
import { navbarComponent } from "../componentes/navbar.js";
import { footerComponent } from "../componentes/footer.js";
import { CardComponent } from "../componentes/card.js";

let navContainer = document.querySelector('header');
let footerContainer = document.querySelector('footer');
let cardContainer = document.querySelector('#card');
let cardContainerCelulares = document.querySelector('#cardCelulares');
let cardContainerSmartwacth = document.querySelector('#cardSmartwatch');
let cardContainerAccesorios = document.querySelector('#cardAccesorios');

window.addEventListener('load', () => {
    navContainer.innerHTML = navbarComponent;
    footerContainer.innerHTML = footerComponent;

    const navbarRedirectButton = document.getElementById('navbarRedirectButton');
    navbarRedirectButton.addEventListener('click', () => {
        window.location.href = '../public_page/login.html';
    });

    let pageName = document.getElementById('pageName').value;
    let title = document.getElementById('title');
    title.textContent = `${pageName}`;
    document.title = pageName;

    fetch('../componentes/data.json').then(res => res.json()).then(data => {
        const celulares = data.find(e => e.categoria === "celulares").productos;
        const smartwatchs = data.find(e => e.categoria === "smartwatchs").productos;
        const accesorios = data.find(e => e.categoria === "accesorios").productos;
        const primerosDosCelulares = celulares.slice(0, 2);
        const primerosDosSmartwatch = smartwatchs.slice(0, 2);
        const primerosDosAccesorios = accesorios.slice(0, 2); 
        let cardHTML = '<div class="row row-cols-1 row-cols-md-4 g-4 my-4 p-5">';
        primerosDosCelulares.forEach(producto => {
            cardHTML = cardHTML + CardComponent(producto);
        });
        primerosDosSmartwatch.forEach(producto => {
            cardHTML = cardHTML + CardComponent(producto);
        });
        primerosDosAccesorios.forEach(producto => {
            cardHTML = cardHTML + CardComponent(producto);
        });
        cardHTML = cardHTML + '</div>';
        cardContainer.innerHTML = cardHTML;
    })
    .catch(error => {
        console.log(error);
    });

    fetch('../componentes/data.json').then(res => res.json()).then(data => {
        const celulares = data.find(e => e.categoria === "celulares").productos;
        let cardHTML = '<div class="row row-cols-1 row-cols-md-4 g-4 my-4 p-5">';
        celulares.forEach(producto => {
            cardHTML = cardHTML + CardComponent(producto);
        });
        cardHTML = cardHTML + '</div>';
        cardContainerCelulares.innerHTML = cardHTML;
    })
    .catch(error => {
        console.log(error);
    });
    
    fetch('../componentes/data.json').then(res => res.json()).then(data => {
        const smartwatchs = data.find(e => e.categoria === "smartwatchs").productos;
        let cardHTML = '<div class="row row-cols-1 row-cols-md-4 g-4 my-4 p-5">';
        smartwatchs.forEach(producto => {
            cardHTML = cardHTML + CardComponent(producto);
        });
        cardHTML = cardHTML + '</div>';
        cardContainerSmartwacth.innerHTML = cardHTML;
    })
    .catch(error => {
        console.log(error);
    });

    fetch('../componentes/data.json').then(res => res.json()).then(data => {
        const accesorios = data.find(e => e.categoria === "accesorios").productos;
        let cardHTML = '<div class="row row-cols-1 row-cols-md-4 g-4 my-4 p-5">';
        accesorios.forEach(producto => {
            cardHTML = cardHTML + CardComponent(producto);
        });
        cardHTML = cardHTML + '</div>';
        cardContainerAccesorios.innerHTML = cardHTML;
    })
    .catch(error => {
        console.log(error);
    });
});