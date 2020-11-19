var slideIndex = 0;
var slides = document.querySelectorAll(".main-screen__slides.ibg");
var dots = document.querySelectorAll(".main-screen__dot");
showSlides();
function showSlides() {
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("main-screen__dot-active");
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("main-screen__slides_active");
  }
  slides[slideIndex-1].classList.add("main-screen__slides_active");
  dots[slideIndex-1].classList.add("main-screen__dot-active");
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
dots.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    dots.forEach((item) => {
      item.classList.remove("main-screen__dot-active");
    });
    slides.forEach((item) => {
      item.classList.remove("main-screen__slides_active");
    });
    indicator.classList.add('main-screen__dot-active');
    slides[i].classList.add("main-screen__slides_active");
    slideIndex = i;
  });
});
