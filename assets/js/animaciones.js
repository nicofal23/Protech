/* Muestra con animación los elementos .slide-right, .slide-left y .slide-top
   cuando entran en pantalla (les agrega la clase .animate una sola vez). */

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    });

    document
        .querySelectorAll('.slide-right, .slide-left, .slide-top')
        .forEach((elemento) => observer.observe(elemento));
});
