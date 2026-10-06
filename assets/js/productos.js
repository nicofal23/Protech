/* =========================================================
   PROTECH ARGENTINA - Modales de producto con carrusel
   ---------------------------------------------------------
   Sirve para todas las páginas de productos. No hace falta
   tocar este archivo para agregar o quitar productos:

   1. En el botón "Ver más" poné:  data-abrir-modal="id-del-modal"
   2. El modal tiene que tener ese id y la clase "modal-producto".
   3. Las fotos van dentro de <div class="carousel-images">.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Botones "Ver más"
    document.querySelectorAll('[data-abrir-modal]').forEach((boton) => {
        const modal = document.getElementById(boton.dataset.abrirModal);
        if (modal) {
            boton.addEventListener('click', () => abrirModal(modal));
        }
    });

    // Cada modal: cerrar con la X, cerrar al tocar afuera y carrusel
    document.querySelectorAll('.modal-producto').forEach((modal) => {
        modal.querySelectorAll('.close').forEach((x) => {
            x.addEventListener('click', () => cerrarModal(modal));
        });

        modal.addEventListener('click', (evento) => {
            if (evento.target === modal) {
                cerrarModal(modal);
            }
        });

        iniciarCarrusel(modal);
    });
});

function abrirModal(modal) {
    modal.style.display = 'block';
}

function cerrarModal(modal) {
    modal.style.display = 'none';
}

function iniciarCarrusel(modal) {
    const contenedor = modal.querySelector('.carousel-images');
    if (!contenedor) return;

    const total = contenedor.children.length;
    let actual = 0;

    function mostrar(indice) {
        // Da la vuelta: después de la última vuelve a la primera y viceversa
        actual = (indice + total) % total;
        contenedor.style.transform = `translateX(${-actual * 100}%)`;
    }

    modal.querySelectorAll('.carousel-control.next').forEach((boton) => {
        boton.addEventListener('click', () => mostrar(actual + 1));
    });

    modal.querySelectorAll('.carousel-control.prev').forEach((boton) => {
        boton.addEventListener('click', () => mostrar(actual - 1));
    });

    mostrar(0);
}
