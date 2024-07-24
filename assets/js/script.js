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

// Open modal 3
openModalBtn3.onclick = function() {
    modal3.style.display = 'block';
};

// Close modal 3
closeButtons3.forEach(button => {
    button.onclick = function() {
        modal3.style.display = 'none';
    };
});

// Open modal 4
openModalBtn4.onclick = function() {
    modal4.style.display = 'block';
};

// Close modal 4
closeButtons4.forEach(button => {
    button.onclick = function() {
        modal4.style.display = 'none';
    };
});

// Close modal if user clicks outside of modal content
window.onclick = function(event) {
    if (event.target === modal1) {
        modal1.style.display = 'none';
    } else if (event.target === modal2) {
        modal2.style.display = 'none';
    } else if (event.target === modal3) {
        modal3.style.display = 'none';
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


// Carousel functionality for modal 3
function showImage3(index) {
    const images = carouselImages3.children;
    if (index >= images.length) index = 0;
    if (index < 0) index = images.length - 1;
    const offset = -index * 100;
    carouselImages3.style.transform = `translateX(${offset}%)`;
}

nextButtons3.forEach(button => {
    button.onclick = function() {
        index3++;
        showImage3(index3);
    };
});

prevButtons3.forEach(button => {
    button.onclick = function() {
        index3--;
        showImage3(index3);
    };
});

// Initialize the carousel for modal 1
showImage3(index3);


// Carousel functionality for modal 4
function showImage4(index) {
    const images = carouselImages4.children;
    if (index >= images.length) index = 0;
    if (index < 0) index = images.length - 1;
    const offset = -index * 100;
    carouselImages4.style.transform = `translateX(${offset}%)`;
}

nextButtons4.forEach(button => {
    button.onclick = function() {
        index4++;
        showImage4(index4);
    };
});

prevButtons4.forEach(button => {
    button.onclick = function() {
        index4--;
        showImage4(index4);
    };
});

// Initialize the carousel for modal 1
showImage4(index4);