$('.swiper').append(`<div class="swiper-scrollbar"></div>`)
$('.swiper').append(`<div class="swiper-pagination"></div>`)
$('.swiper').append(`<div class="swiper-arrow button-prev"></div>`)
$('.swiper').append(`<div class="swiper-arrow button-next"></div>`)

const testimonial = new Swiper('.testimonial', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  allowTouchMove: true,
  parallax: true,
  autoplay: {
    delay: 7000,
  },
  centeredSlides: true,
  mousewheel: {
    forceToAxis: true,
  },
  speed: 300,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: false,
  },
})
