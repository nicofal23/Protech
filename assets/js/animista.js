document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Deja de observar después de la animación
            }
        });
    });

    // Selecciona todos los elementos con la clase slide-right o slide-left
    const elements = document.querySelectorAll('.slide-right, .slide-left, .slide-top, .text-shadow-pop-bottom');
    elements.forEach(element => {
        observer.observe(element);
    });
});