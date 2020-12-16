const hamburger = document.querySelector(".main-scren__line-nav-block");
const navLinks = document.querySelector(".main-screen__links-nav");
const htmlTag = document.querySelector("html");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("change");
    navLinks.classList.toggle("open");
    htmlTag.classList.toggle("lock");
});
