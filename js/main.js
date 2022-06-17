const backToTop = document.getElementById("backtotop");

function checkScroll() {
  //웹 페이지가 얼마나 수직으로 스크롤되어있는지 확인하는 값? Window.pageYOffset
  // https://developer.mozilla.org/ko/docs/Web/API/Window/pageYOffset
  let pageYOffset = Window.pageYOffset;
  if (pageYOffset !== 0) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}
function moveBackToTop() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" }); // smooth 하게 스크롤 하기 : https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo
  }
}
window.addEventListener("scroll", checkScroll);
backToTop.addEventListener("click", moveBackToTop);
