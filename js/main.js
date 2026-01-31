// Array de vehículos (Base de datos)
const productos = [
    {
        id: 1,
        nombre: "Adventure 4x4",
        precio: 35000,
        desc: "Equipado con la última tecnología en seguridad y tracción integral para cualquier terreno.",
        img: "img/SUV Adventure 4x4.png"
    },
    {
        id: 2,
        nombre: "Corolla sedan",
        precio: 28500,
        desc: "Elegancia y confort en cada kilómetro. Motor híbrido de alta eficiencia energética.",
        img: "img/Sedan Corolla.jpg"
    },
    {
        id: 3,
        nombre: "Deportivo GTS",
        precio: 52000,
        desc: "Aceleración de 0 a 100 en 3.5 segundos. Diseñado para los amantes de la velocidad.",
        img: "img/deportivo GTS.jpg"
    },
    {
        id: 4,
        nombre: "Urban Cruiser",
        precio: 19000,
        desc: "El aliado perfecto para la ciudad. Fácil de estacionar y con bajo consumo de combustible.",
        img: "img/Compac urban.jpg"
    }
];

let carrito = JSON.parse(localStorage.getItem('autos_cotizados')) || [];

function renderHome() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = productos.map(auto => `
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card h-100 border-0 shadow-sm transition-card">
                <img src="${auto.img}" class="card-img-top" alt="${auto.nombre}" style="height: 180px; object-fit: cover;">
                <div class="card-body text-center">
                    <h5 class="card-title fw-bold">${auto.nombre}</h5>
                    <p class="card-text text-muted small">${auto.desc.substring(0, 70)}...</p>
                    <p class="text-primary fw-bold fs-5">USD ${auto.precio.toLocaleString()}</p>
                </div>
                <div class="card-footer bg-white border-0 pb-3">
                    <div class="d-grid gap-2">
                        <a href="product-detail.html?id=${auto.id}" class="btn btn-outline-dark btn-sm">Ver Detalles</a>
                        <button onclick="agregarAlCarrito(${auto.id})" class="btn btn-warning btn-sm fw-bold">Cotizar Ahora</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function agregarAlCarrito(id) {
    const auto = productos.find(p => p.id === id);
    carrito.push(auto);
    localStorage.setItem('autos_cotizados', JSON.stringify(carrito));
    actualizarContador();
    alert(`Se ha añadido el ${auto.nombre} a tu lista de cotización.`);
}

function actualizarContador() {
    const countElements = document.querySelectorAll('#cart-count');
    countElements.forEach(el => el.innerText = carrito.length);
}

document.addEventListener('DOMContentLoaded', () => {
    renderHome();
    actualizarContador();
});