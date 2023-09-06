let currentSlide = 0;
const slides = document.querySelectorAll(".slider-image");

function showSlide(n) {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.opacity = 1;
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

// Initial display
showSlide(currentSlide);


var headerbut = document.getElementById("headerbut");
const header = document.getElementById("tophead")
headerbut.addEventListener("click", function () {
      header.classList.toggle("none")
    })