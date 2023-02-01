const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

AOS.init({
  duration: 800, // values from 0 to 3000, with step 50ms
  once: true, // whether animation should happen only once - while scrolling down
});
