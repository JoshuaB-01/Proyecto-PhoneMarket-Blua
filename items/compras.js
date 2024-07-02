import { navbarComponent } from "../componentes/navbar.js";
import { footerComponent } from "../componentes/footer.js";
import { getData, deleteCollection } from "../items/localStorage.controller.js"; 

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
    let tableHTML = 
        `<table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>`;
    
    carrito.forEach(item => {
        tableHTML += 
            `<tr>
                <td>${item.titulo}</td>
                <td>${item.cantidad}</td>
                <td>$${item.precio}</td>
            </tr>`;
    });
    tableHTML += 
            `</tbody>
        </table>
        <div class="d-flex justify-content-end mb-3">
            <button id="reinicioTabla" class="btn btn-danger me-2">Vaciar Carrito</button>
            <button id="compraFinalizada" class="btn btn-success">Finalizar Compra</button>
        </div>`;
    
    tableContainer.innerHTML = tableHTML;

    
    const reinicioTabla = document.getElementById('reinicioTabla');
    reinicioTabla.addEventListener('click', () => {
        deleteCollection('carrito');
        alert('Se vacio el carrito');
        window.location.reload();
    });
    
    const compraFinalizada = document.getElementById('compraFinalizada');
    compraFinalizada.addEventListener('click', () => {
        deleteCollection('carrito');
        alert('Compra finalizada');
        window.location.reload();
    });
});