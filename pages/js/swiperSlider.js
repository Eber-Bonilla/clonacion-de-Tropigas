var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".slider2-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider2-next",
    prevEl: ".slider2-prev",
  },
});