import { navbarComponent } from "../componentes/navbar.js";
import { footerComponent } from "../componentes/footer.js";
import { CardComponent } from "../componentes/card.js";
import { getData, setData } from "../items/localStorage.controller.js";

let navContainer = document.querySelector('header');
let footerContainer = document.querySelector('footer');
let cardContainer = document.querySelector('#cardContainer');
let productos = [];

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

    fetch('../componentes/data.json').then(res => res.json()).then(data => {
        let cardHTML = '<div class="row row-cols-1 row-cols-md-4 g-4 my-4 p-5">';
        data.forEach(categoria => {
            categoria.productos.slice(0, 2).forEach(producto => {
                productos.push(producto);
                cardHTML += CardComponent(producto);
            });
        });
        cardHTML = cardHTML + '</div>';
        cardContainer.innerHTML = cardHTML;
    })
    .catch(error => {
        console.log(error);
    });
});

window.agregarAlCarrito = function(productId) {
    const cantidad = parseInt(document.getElementById(`cantidad-${productId}`).value);
    if (cantidad > 0) {
        let carrito = getData('carrito') || [];
        const productoExistente = carrito.find(producto => producto.id === productId);
        if (productoExistente) {
            productoExistente.cantidad += cantidad;
        } else {
            const producto = productos.find(producto => producto.id === productId);
            carrito.push({
                id: productId,
                titulo: producto.titulo,
                precio: producto.precio,
                cantidad: cantidad
            });
        }
        setData('carrito', carrito);
        alert('Producto agregado al carrito');
    } else {
        alert('Por favor, ingrese una cantidad válida');
    }
};