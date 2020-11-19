let itemPopularDescr = document.querySelectorAll(".item-popular__descr");
let itemPopularImg = document.querySelectorAll(".item-popular__img");

itemPopularDescr.forEach((element,i) => {
  element.onmouseover = () => {
     itemPopularImg[i].classList.add("item-popular__img_show");
  };
  element.onmouseout = () => {
    itemPopularImg[i].classList.remove("item-popular__img_show");
  };
});
