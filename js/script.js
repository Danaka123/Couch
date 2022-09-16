"use strict";

const reviewsSwiper = document.querySelector(".popularcouch-swiper");

if (reviewsSwiper) {
  const swiper = new Swiper(".popularcouch-swiper", {
    // Optional parameters
    autoHeught: true,
    loop: true,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
