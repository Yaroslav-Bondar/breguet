let goTop = document.querySelector('.button-up');
window.addEventListener('scroll', trackScroll);
goTop.addEventListener('click', backToTop);
function trackScroll() {
    let scroll = window.pageYOffset;
    let coord = document.documentElement.clientHeight;

    if (scroll > coord) {
        goTop.classList.add('button-up_show');
    }
    if (scroll < coord) { 
        goTop.classList.remove('button-up_show'); 
    }
}
function backToTop() { 
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        // setTimeout(backToTop, -4);
    }
}