// Get modals and elements
const modal1 = document.getElementById('productModal1');
const modal2 = document.getElementById('productModal2');
const modal3 = document.getElementById('productModal3');
// const modal4 = document.getElementById('productModal4');
// const modal5 = document.getElementById('productModal5');
// const modal6 = document.getElementById('productModal6');
// const modal7 = document.getElementById('productModal7');
// const modal8 = document.getElementById('productModal8');
// const modal9 = document.getElementById('productModal9');

const openModalBtn1 = document.getElementById('openModalBtn1');
const openModalBtn2 = document.getElementById('openModalBtn2');
const openModalBtn3 = document.getElementById('openModalBtn3');
// const openModalBtn4 = document.getElementById('openModalBtn4');
// const openModalBtn5 = document.getElementById('openModalBtn5');
// const openModalBtn6 = document.getElementById('openModalBtn6');
// const openModalBtn7 = document.getElementById('openModalBtn7');
// const openModalBtn8 = document.getElementById('openModalBtn8');
// const openModalBtn9 = document.getElementById('openModalBtn9');

const closeButtons1 = modal1.querySelectorAll('.close');
const closeButtons2 = modal2.querySelectorAll('.close');
const closeButtons3 = modal3.querySelectorAll('.close');
// const closeButtons4 = modal4.querySelectorAll('.close');
// const closeButtons5 = modal5.querySelectorAll('.close');
// const closeButtons6 = modal6.querySelectorAll('.close');
// const closeButtons7 = modal7.querySelectorAll('.close');
// const closeButtons8 = modal8.querySelectorAll('.close');
// const closeButtons9 = modal9.querySelectorAll('.close');

const prevButtons1 = modal1.querySelectorAll('.carousel-control.prev');
const nextButtons1 = modal1.querySelectorAll('.carousel-control.next');
const prevButtons2 = modal2.querySelectorAll('.carousel-control.prev');
const nextButtons2 = modal2.querySelectorAll('.carousel-control.next');
const prevButtons3 = modal3.querySelectorAll('.carousel-control.prev');
const nextButtons3 = modal3.querySelectorAll('.carousel-control.next');
// const prevButtons4 = modal4.querySelectorAll('.carousel-control.prev');
// const nextButtons4 = modal4.querySelectorAll('.carousel-control.next');
// const prevButtons5 = modal5.querySelectorAll('.carousel-control.prev');
// const nextButtons5 = modal5.querySelectorAll('.carousel-control.next');
// const prevButtons6 = modal6.querySelectorAll('.carousel-control.prev');
// const nextButtons6 = modal6.querySelectorAll('.carousel-control.next');
// const prevButtons7 = modal7.querySelectorAll('.carousel-control.prev');
// const nextButtons7 = modal7.querySelectorAll('.carousel-control.next');
// const prevButtons8 = modal8.querySelectorAll('.carousel-control.prev');
// const nextButtons8 = modal8.querySelectorAll('.carousel-control.next');
// const prevButtons9 = modal9.querySelectorAll('.carousel-control.prev');
// const nextButtons9 = modal9.querySelectorAll('.carousel-control.next');

const carouselImages1 = modal1.querySelector('.carousel-images');
const carouselImages2 = modal2.querySelector('.carousel-images');
const carouselImages3 = modal3.querySelector('.carousel-images');
// const carouselImages4 = modal4.querySelector('.carousel-images');
// const carouselImages5 = modal5.querySelector('.carousel-images');
// const carouselImages6 = modal6.querySelector('.carousel-images');
// const carouselImages7 = modal7.querySelector('.carousel-images');
// const carouselImages8 = modal8.querySelector('.carousel-images');
// const carouselImages9 = modal9.querySelector('.carousel-images');

let index1 = 0;
let index2 = 0;
let index3 = 0;
// let index4 = 0;
// let index5 = 0;
// let index6 = 0;
// let index7 = 0;
// let index8 = 0;
// let index9 = 0;

// Open modals
openModalBtn1.onclick = function() { modal1.style.display = 'block'; };
openModalBtn2.onclick = function() { modal2.style.display = 'block'; };
openModalBtn3.onclick = function() { modal3.style.display = 'block'; };
// openModalBtn4.onclick = function() { modal4.style.display = 'block'; };
// openModalBtn5.onclick = function() { modal5.style.display = 'block'; };
// openModalBtn6.onclick = function() { modal6.style.display = 'block'; };
// openModalBtn7.onclick = function() { modal7.style.display = 'block'; };
// openModalBtn8.onclick = function() { modal8.style.display = 'block'; };
// openModalBtn9.onclick = function() { modal9.style.display = 'block'; };

// Close modals
closeButtons1.forEach(button => { button.onclick = function() { modal1.style.display = 'none'; }; });
closeButtons2.forEach(button => { button.onclick = function() { modal2.style.display = 'none'; }; });
closeButtons3.forEach(button => { button.onclick = function() { modal3.style.display = 'none'; }; });
// closeButtons4.forEach(button => { button.onclick = function() { modal4.style.display = 'none'; }; });
// closeButtons5.forEach(button => { button.onclick = function() { modal5.style.display = 'none'; }; });
// closeButtons6.forEach(button => { button.onclick = function() { modal6.style.display = 'none'; }; });
// closeButtons7.forEach(button => { button.onclick = function() { modal7.style.display = 'none'; }; });
// closeButtons8.forEach(button => { button.onclick = function() { modal8.style.display = 'none'; }; });
// closeButtons9.forEach(button => { button.onclick = function() { modal9.style.display = 'none'; }; });

// Close modals if user clicks outside
window.onclick = function(event) {
    if (event.target === modal1) modal1.style.display = 'none';
    if (event.target === modal2) modal2.style.display = 'none';
    if (event.target === modal3) modal3.style.display = 'none';
    // if (event.target === modal4) modal4.style.display = 'none';
    // if (event.target === modal5) modal5.style.display = 'none';
    // if (event.target === modal6) modal6.style.display = 'none';
    // if (event.target === modal7) modal7.style.display = 'none';
    // if (event.target === modal8) modal8.style.display = 'none';
    // if (event.target === modal9) modal9.style.display = 'none';
};

// Carousel functionality
function showImage(index, carouselImages) {
    const images = carouselImages.children;
    if (index >= images.length) index = 0;
    if (index < 0) index = images.length - 1;
    const offset = -index * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

// Initialize carousel
function initializeCarousel(prevButtons, nextButtons, carouselImages, index) {
    nextButtons.forEach(button => {
        button.onclick = function() {
            index++;
            showImage(index, carouselImages);
        };
    });

    prevButtons.forEach(button => {
        button.onclick = function() {
            index--;
            showImage(index, carouselImages);
        };
    });

    showImage(index, carouselImages);
}

// Initialize all carousels
initializeCarousel(prevButtons1, nextButtons1, carouselImages1, index1);
initializeCarousel(prevButtons2, nextButtons2, carouselImages2, index2);
initializeCarousel(prevButtons3, nextButtons3, carouselImages3, index3);
// initializeCarousel(prevButtons4, nextButtons4, carouselImages4, index4);
// initializeCarousel(prevButtons5, nextButtons5, carouselImages5, index5);
// initializeCarousel(prevButtons6, nextButtons6, carouselImages6, index6);
// initializeCarousel(prevButtons7, nextButtons7, carouselImages7, index7);
// initializeCarousel(prevButtons8, nextButtons8, carouselImages8, index8);
// initializeCarousel(prevButtons9, nextButtons9, carouselImages9, index9);
