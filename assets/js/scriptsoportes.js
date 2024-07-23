// Get modals and elements
const modal1 = document.getElementById('productModal1');
const modal2 = document.getElementById('productModal2');
const modal3 = document.getElementById('productModal3');
const modal4 = document.getElementById('productModal4');


const openModalBtn1 = document.getElementById('openModalBtn1');
const openModalBtn2 = document.getElementById('openModalBtn2');
const openModalBtn3 = document.getElementById('openModalBtn3');
const openModalBtn4 = document.getElementById('openModalBtn4');

const closeButtons1 = modal1.querySelectorAll('.close');
const closeButtons2 = modal2.querySelectorAll('.close');
const closeButtons3 = modal3.querySelectorAll('.close');
const closeButtons4 = modal4.querySelectorAll('.close');


const prevButtons1 = modal1.querySelectorAll('.carousel-control.prev');
const nextButtons1 = modal1.querySelectorAll('.carousel-control.next');
const prevButtons2 = modal2.querySelectorAll('.carousel-control.prev');
const nextButtons2 = modal2.querySelectorAll('.carousel-control.next');
const prevButtons3 = modal3.querySelectorAll('.carousel-control.prev');
const nextButtons3 = modal3.querySelectorAll('.carousel-control.next');
const prevButtons4 = modal4.querySelectorAll('.carousel-control.prev');
const nextButtons4 = modal4.querySelectorAll('.carousel-control.next');


const carouselImages1 = modal1.querySelector('.carousel-images');
const carouselImages2 = modal2.querySelector('.carousel-images');
const carouselImages3 = modal3.querySelector('.carousel-images');
const carouselImages4 = modal4.querySelector('.carousel-images');


let index1 = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;


// Open modals
openModalBtn1.onclick = function() { modal1.style.display = 'block'; };
openModalBtn2.onclick = function() { modal2.style.display = 'block'; };
openModalBtn3.onclick = function() { modal3.style.display = 'block'; };
openModalBtn4.onclick = function() { modal4.style.display = 'block'; };


// Close modals
closeButtons1.forEach(button => { button.onclick = function() { modal1.style.display = 'none'; }; });
closeButtons2.forEach(button => { button.onclick = function() { modal2.style.display = 'none'; }; });
closeButtons3.forEach(button => { button.onclick = function() { modal3.style.display = 'none'; }; });
closeButtons4.forEach(button => { button.onclick = function() { modal4.style.display = 'none'; }; });


// Close modals if user clicks outside
window.onclick = function(event) {
    if (event.target === modal1) modal1.style.display = 'none';
    if (event.target === modal2) modal2.style.display = 'none';
    if (event.target === modal3) modal3.style.display = 'none';
    if (event.target === modal4) modal4.style.display = 'none';
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
initializeCarousel(prevButtons4, nextButtons4, carouselImages4, index4);

// <!-- Product Cards 4 -->
// <div class="col-md-4 mb-4">
//     <div class="card product-card rounded-0 imagenshop">
//         <img class="card-img-top img-fluid" src="assets/img/jersey/jersey-giant-adelante.jpg" alt="Product Image">
//         <div class="card-body">
//             <p href="#" class="h4 card-title text-decoration-none">Jersey</p>
//             <p class="descripcionshop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti, mollitia in adipisci voluptate facere, soluta nam doloribus</p>
//             <div class="d-flex justify-content-center mt-3 conjunto">
//                 <button class="btn btn-success">
//                     <a href="https://wa.link/fvsoxg" target="_blank"><i class="fa-brands fa-whatsapp"></i> Consultar</a>
//                 </button>
//                 <button class="btn btn-success" id="openModalBtn4">
//                     <i class="far fa-eye"></i> Ver más
//                 </button>
//             </div>
//         </div>
//     </div>
// </div>

// <!-- Product Cards 5 -->
// <div class="col-md-4 mb-4">
//     <div class="card product-card rounded-0 imagenshop">
//         <img class="card-img-top img-fluid" src="assets/img/jersey/jersey-kamikazes-adelante.jpg" alt="Product Image">
//         <div class="card-body">
//             <p href="#" class="h4 card-title text-decoration-none">Jersey</p>
//             <p class="descripcionshop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti, mollitia in adipisci voluptate facere, soluta nam doloribus</p>
//             <div class="d-flex justify-content-center mt-3 conjunto">
//                 <button class="btn btn-success">
//                     <a href="https://wa.link/fvsoxg" target="_blank"><i class="fa-brands fa-whatsapp"></i> Consultar</a>
//                 </button>
//                 <button class="btn btn-success" id="openModalBtn5">
//                     <i class="far fa-eye"></i> Ver más
//                 </button>
//             </div>
//         </div>
//     </div>
// </div>

// <!-- Product Cards 6-->
// <div class="col-md-4 mb-4">
//     <div class="card product-card rounded-0 imagenshop">
//         <img class="card-img-top img-fluid" src="assets/img/jersey/jersey-moji-adelante.jpg" alt="Product Image">
//         <div class="card-body">
//             <p href="#" class="h4 card-title text-decoration-none">Jersey</p>
//             <p class="descripcionshop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti, mollitia in adipisci voluptate facere, soluta nam doloribus</p>
//             <div class="d-flex justify-content-center mt-3 conjunto">
//                 <button class="btn btn-success">
//                     <a href="https://wa.link/fvsoxg" target="_blank"><i class="fa-brands fa-whatsapp"></i> Consultar</a>
//                 </button>
//                 <button class="btn btn-success" id="openModalBtn6">
//                     <i class="far fa-eye"></i> Ver más
//                 </button>
//             </div>
//         </div>
//     </div>
// </div>

// <!-- Product Cards 7 -->
// <div class="col-md-4 mb-4">
//     <div class="card product-card rounded-0 imagenshop">
//         <img class="card-img-top img-fluid" src="assets/img/jersey/jersey-negroverde-adelante.jpg" alt="Product Image">
//         <div class="card-body">
//             <p href="#" class="h4 card-title text-decoration-none">Jersey</p>
//             <p class="descripcionshop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti, mollitia in adipisci voluptate facere, soluta nam doloribus</p>
//             <div class="d-flex justify-content-center mt-3 conjunto">
//                 <button class="btn btn-success">
//                     <a href="https://wa.link/fvsoxg" target="_blank"><i class="fa-brands fa-whatsapp"></i> Consultar</a>
//                 </button>
//                 <button class="btn btn-success" id="openModalBtn7">
//                     <i class="far fa-eye"></i> Ver más
//                 </button>
//             </div>
//         </div>
//     </div>
// </div>

// <!-- Product Cards 8 -->
// <div class="col-md-4 mb-4">
//     <div class="card product-card rounded-0 imagenshop">
//         <img class="card-img-top img-fluid" src="assets/img/jersey/jersey-pelotonbike-adelante.jpg" alt="Product Image">
//         <div class="card-body">
//             <p href="#" class="h4 card-title text-decoration-none">Jersey</p>
//             <p class="descripcionshop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti, mollitia in adipisci voluptate facere, soluta nam doloribus</p>
//             <div class="d-flex justify-content-center mt-3 conjunto">
//                 <button class="btn btn-success">
//                     <a href="https://wa.link/fvsoxg" target="_blank"><i class="fa-brands fa-whatsapp"></i> Consultar</a>
//                 </button>
//                 <button class="btn btn-success" id="openModalBtn8">
//                     <i class="far fa-eye"></i> Ver más
//                 </button>
//             </div>
//         </div>
//     </div>
// </div>

// <!-- Product Cards 9 -->
// <div class="col-md-4 mb-4">
//     <div class="card product-card rounded-0 imagenshop">
//         <img class="card-img-top img-fluid" src="assets/img/jersey/jersey-vialtech-adelante.jpg" alt="Product Image">
//         <div class="card-body">
//             <p href="#" class="h4 card-title text-decoration-none">Jersey</p>
//             <p class="descripcionshop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti, mollitia in adipisci voluptate facere, soluta nam doloribus</p>
//             <div class="d-flex justify-content-center mt-3 conjunto">
//                 <button class="btn btn-success">
//                     <a href="https://wa.link/fvsoxg" target="_blank"><i class="fa-brands fa-whatsapp"></i> Consultar</a>
//                 </button>
//                 <button class="btn btn-success" id="openModalBtn9">
//                     <i class="far fa-eye"></i> Ver más
//                 </button>
//             </div>
//         </div>
//     </div>
// </div>