document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
      const intro = document.getElementById('intro');
      if (intro) {
          intro.classList.add('top');
      }

      setTimeout(function() {
          const mainContent = document.getElementById('main-content');
          const rodilloContent = document.getElementById('rodillo-content');
          const mainImage = document.getElementById('carouselExampleIndicators');
          const header = document.querySelector('header');

          if (mainContent) {
              mainContent.classList.remove('hidden');
          }
          if (rodilloContent) {
              rodilloContent.classList.remove('hidden');
          }
          if (mainImage) {
              mainImage.classList.remove('hidden');
              mainImage.classList.add('scale-up-center');
          }

          // Detectar scroll para activar fixed-header
          window.addEventListener('scroll', function() {
              if (window.scrollY > 0) {
                  header.classList.add('fixed-header');
              } else {
                  header.classList.remove('fixed-header');
              }
          });

      }, 1000); // Esperar a que la transición complete
  }, 1000); // Esperar inicialmente
});





/**carrousel  */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the carousel manually
  const myCarousel = document.getElementById('myCarousel');
  const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000, // Adjust interval as needed (in milliseconds)
    pause: 'hover'
  });
});