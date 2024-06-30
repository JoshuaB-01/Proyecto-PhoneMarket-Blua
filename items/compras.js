import { navbarComponent } from "../componentes/navbar.js";
import { footerComponent } from "../componentes/footer.js";
import { getData } from "../items/localStorage.controller.js"; 

let navContainer = document.querySelector('header');
let footerContainer = document.querySelector('footer');
let tableContainer = document.querySelector('#tableContainer');

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

    const carrito = getData('carrito');
    let tableHTML = `
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>`;
    
    carrito.forEach(item => {
        tableHTML += `
            <tr>
                <td>${item.titulo}</td>
                <td>${item.cantidad}</td>
                <td>$${item.precio}</td>
            </tr>`;
    });
    tableHTML += `
            </tbody>
        </table>`;
    tableContainer.innerHTML = tableHTML;
});