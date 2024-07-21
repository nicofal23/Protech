// Get modals and elements
const modal1 = document.getElementById('productModal1');
const modal2 = document.getElementById('productModal2');
const openModalBtn1 = document.getElementById('openModalBtn1');
const openModalBtn2 = document.getElementById('openModalBtn2');
const closeButtons1 = modal1.querySelectorAll('.close');
const closeButtons2 = modal2.querySelectorAll('.close');
const prevButtons1 = modal1.querySelectorAll('.carousel-control.prev');
const nextButtons1 = modal1.querySelectorAll('.carousel-control.next');
const prevButtons2 = modal2.querySelectorAll('.carousel-control.prev');
const nextButtons2 = modal2.querySelectorAll('.carousel-control.next');
const carouselImages1 = modal1.querySelector('.carousel-images');
const carouselImages2 = modal2.querySelector('.carousel-images');
let index1 = 0;
let index2 = 0;

// Open modal 1
openModalBtn1.onclick = function() {
    modal1.style.display = 'block';
};

// Close modal 1
closeButtons1.forEach(button => {
    button.onclick = function() {
        modal1.style.display = 'none';
    };
});

// Open modal 2
openModalBtn2.onclick = function() {
    modal2.style.display = 'block';
};

// Close modal 2
closeButtons2.forEach(button => {
    button.onclick = function() {
        modal2.style.display = 'none';
    };
});

// Close modal if user clicks outside of modal content
window.onclick = function(event) {
    if (event.target === modal1) {
        modal1.style.display = 'none';
    } else if (event.target === modal2) {
        modal2.style.display = 'none';
    }
};

// Carousel functionality for modal 1
function showImage1(index) {
    const images = carouselImages1.children;
    if (index >= images.length) index = 0;
    if (index < 0) index = images.length - 1;
    const offset = -index * 100;
    carouselImages1.style.transform = `translateX(${offset}%)`;
}

nextButtons1.forEach(button => {
    button.onclick = function() {
        index1++;
        showImage1(index1);
    };
});

prevButtons1.forEach(button => {
    button.onclick = function() {
        index1--;
        showImage1(index1);
    };
});

// Initialize the carousel for modal 1
showImage1(index1);

// Carousel functionality for modal 2
function showImage2(index) {
    const images = carouselImages2.children;
    if (index >= images.length) index = 0;
    if (index < 0) index = images.length - 1;
    const offset = -index * 100;
    carouselImages2.style.transform = `translateX(${offset}%)`;
}

nextButtons2.forEach(button => {
    button.onclick = function() {
        index2++;
        showImage2(index2);
    };
});

prevButtons2.forEach(button => {
    button.onclick = function() {
        index2--;
        showImage2(index2);
    };
});

// Initialize the carousel for modal 2
showImage2(index2);
