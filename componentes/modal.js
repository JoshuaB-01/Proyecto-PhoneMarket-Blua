const url = 'http://127.0.0.1:5500/' 

export function ModalComponent(producto) {
    return `
        <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="productModalLabel">Información del producto</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center">
                            <img src="${producto.imagen}" class="img-fluid" alt="Artículo">
                        </div>
                        <h5 class="modal-title" id="productModalLabel">${producto.titulo}</h5>
                        <ul>
                            <p class="mt-3">${producto.informacion}</p>
                        </ul>
                        <div class="d-flex justify-content-between">
                            <div class="col">
                                <p class="text-center price bg-warning fw-bold rounded p-1">$${producto.precio}</p>
                            </div>
                            <div class="ms-2 col">
                                <input type="number" class="form-control numericUpDown p-1" min="0" max="10" placeholder="0" step="1" id="modal-cantidad-${producto.id}">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer"> 
                            <button type="button" class="btn btn-success btn-cart" onclick="agregarAlCarrito(${producto.id}, true)"><i class="bi bi-cart-plus"></i></button> 
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-lg"></i></button>                            
                    </div>
                </div>
            </div>
        </div>
    `;
}