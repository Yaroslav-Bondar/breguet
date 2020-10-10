const hamburger = document.querySelector(".main-scren__line-nav-block");
const navLinks = document.querySelector(".main-screen__links-nav");
const bodyTag = document.getElementsByTagName("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
  navLinks.classList.toggle("open");
  // bodyTag[0].style.overflow = "hidden";
  bodyTag[0].classList.toggle("lock");
});
