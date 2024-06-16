let leftPosition = 0;
let topPosition = 0;
let step = 50;
let direction = "right";
const getHeadings = document.querySelector("h1");

function titleAnimation() {
  if (direction === "right") {
    leftPosition += step;
    if (leftPosition >= 200) {
      leftPosition = 200;
      direction = "down";
    }
  } else if (direction === "down") {
    topPosition += step;
    if (topPosition >= 200) {
      topPosition = 200;
      direction = "left";
    }
  } else if (direction === "left") {
    leftPosition -= step;
    if (leftPosition <= 0) {
      leftPosition = 0;
      direction = "up";
    }
  } else if (direction === "up") {
    topPosition -= step;
    if (topPosition <= 0) {
      topPosition = 0;
      direction = "right";
    }
  }
  getHeadings.style.top = topPosition + "px";
  getHeadings.style.left = leftPosition + "px";
}

setInterval(titleAnimation, 1000);
