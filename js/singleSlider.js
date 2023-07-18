// slider single
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 3, // Number of visible slides
    gap: "30px", // Gap between slides
    focus: "center",

    pagination: true,

    classes: {
      pagination: "splide__pagination your-class-pagination",
      page: "splide__pagination__page your-class-page",
    },
  }).mount();
});

var swiper = new Swiper(".gallerSlider", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
