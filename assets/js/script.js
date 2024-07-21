// Get modal and elements
const modal = document.getElementById('productModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModal = document.querySelector('.close');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
const carouselImages = document.querySelector('.carousel-images');
let index = 0;

// Open modal
openModalBtn.onclick = function() {
    modal.style.display = 'block';
};

// Close modal
closeModal.onclick = function() {
    modal.style.display = 'none';
};

// Close modal if user clicks outside of modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Carousel functionality
function showImage(index) {
    const images = carouselImages.children;
    if (index >= images.length) index = 0;
    if (index < 0) index = images.length - 1;
    const offset = -index * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

// Ensure carousel always works
nextButton.onclick = function() {
    index++;
    showImage(index);
};

prevButton.onclick = function() {
    index--;
    showImage(index);
};

// Initialize the carousel to show the first image
showImage(index);
