let page = 1;
const pages = [
  document.getElementsByClassName("profile")[0],
  document.getElementsByClassName("career")[0],
  document.getElementsByClassName("skill")[0],
  document.getElementsByClassName("personal")[0],
];
const pg = document.getElementsByClassName("page");

const scrollSleep = async () =>
  await new Promise((resolve) => setTimeout(() => resolve(), 1));

const smoothSpeed = 10;
const smoothScrollEffect = async (targetY, cnt) => {
  for (let i = 0; i <= Math.abs(targetY - 80) / smoothSpeed; i++) {
    await scrollSleep();
    window.scrollBy({
      top: cnt * smoothSpeed,
    });
  }
};

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    if (page == pages.length) return;
    page++;
  } else if (e.deltaY < 0) {
    if (page == 1) return;
    page--;
  }
  const targetPageRect = pages[page - 1].getBoundingClientRect();
  console.log(targetPageRect);
  const targetPageYPos = targetPageRect.y;
  smoothScrollEffect(targetPageYPos, targetPageYPos > 0 ? 1 : -1);
});

function movePage(e) {
  console.log(e.path[0].id);
  switch (e.path[0].id) {
    case "profile":
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      break;
    case "career":
      window.scrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" });
      break;
    case "capability":
      window.scrollTo({
        top: window.innerHeight * 2,
        left: 0,
        behavior: "smooth",
      });
      break;
    case "personal":
      window.scrollTo({
        top: window.innerHeight * 3,
        left: 0,
        behavior: "smooth",
      });
      break;
    default:
      return;
  }
}
for (i = 0; i < pages.length; i++) {
  pg[i].addEventListener("click", movePage);
}
