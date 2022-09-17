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
document.querySelectorAll("a.navigation__link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 0;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});
