const url = 'http://127.0.0.1:5500/'

export function CardComponent(producto) {
    return `
        <div class="col">
            <div class="card bg-dark">
                <img src="${producto.imagen}" alt="Articulo">
                <div class="card-body">
                    <h5 class="card-title text-dark fw-bold text-center bg-warning rounded p-2">${producto.titulo}</h5>
                    <p class="card-text text-white">${producto.descripcion}</p>
                </div>
                <div class="card-footer border-white">
                    <div class="row text-center">
                        <div class="col">
                            <p class="price text-dark fw-bold bg-warning rounded p-1">$${producto.precio}</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="col">
                            <input type="number" class="form-control numericUpDown" min="0" max="10" placeholder="0" step="1" id="cantidad-${producto.id}">
                        </div>
                       <div class="ms-2">
                            <button class="btn btn-success" onclick="agregarAlCarrito(${producto.id})"><i class="bi bi-cart-plus"></i></button>
                        </div>
                        <div class="ms-2">
                            <button class="btn btn-info" onclick="abrirModal(${producto.id})"><i class="bi bi-info-circle"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}



