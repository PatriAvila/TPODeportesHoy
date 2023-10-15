
const scrollElement = document.querySelector(".carousel");
const scrollLeft = document.querySelector(".scroll-left");
const scrollRight = document.querySelector(".scroll-right");

const scrollElementvideo = document.querySelector(".carouselvideo");
const scrollLeftvideo = document.querySelector(".scroll-leftvideo");
const scrollRightvideo = document.querySelector(".scroll-rightvideo");

function moveScroll(displacement) {
  let currentPosition = scrollElement.scrollLeft;
  scrollElement.scrollTo(currentPosition + displacement, 0);
}



function moveScrollvideo(displacement) {
  let currentPosition = scrollElementvideo.scrollLeft;
  scrollElementvideo.scrollTo(currentPosition + displacement, 0);
}

scrollLeft.addEventListener("click", () => {
  moveScroll(-400);
});

scrollRight.addEventListener("click", () => {
  moveScroll(400);
});

scrollLeftvideo.addEventListener("click", () => {
  moveScrollvideo(-400);
});

scrollRightvideo.addEventListener("click", () => {
  moveScrollvideo (400);
});

// onload = () => {
//   console.log(scrollElement.style);
//   if (scrollElement.style.display) {
//     scrollLeft.style.display = "none";
//   }
// };

// onload = () => {
//   console.log(scrollElementvideo.style);
//   if (scrollElementvideo.style.display) {
//     scrollLeftvideo.style.display = "none";
//   }
// };
