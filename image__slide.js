const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides > li");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
// const slideCount = slide.length;
const slideCount = 5;
const slideWidth = 300;
const slideMargin = 30;
let currentIdx = 0;

function moveSlide(e) {
  slides.style.left = e * 330 + "px";
  currentIdx = e;
}
nextBtn.addEventListener("click", () => {
  if (Math.abs(currentIdx) < slideCount - 3) moveSlide(currentIdx - 1);
});
prevBtn.addEventListener("click", () => {
  if (currentIdx < 0) moveSlide(currentIdx + 1);
});
