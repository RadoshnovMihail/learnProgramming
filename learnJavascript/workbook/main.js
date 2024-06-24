// const header = document.querySelector('h1');
// let topPos = 0;
// let leftPos = 0;
// let step = 50;
// let direction = 'right';

// function moveHeader() {
//     if (direction === 'right') {
//         leftPos += step;
//         if (leftPos >= 200) {
//             leftPos = 200;
//             direction = 'down';
//         }
//     } else if (direction === 'down') {
//         topPos += step;
//         if (topPos >= 200) {
//             topPos = 200;
//             direction = 'left';
//         }
//     } else if (direction === 'left') {
//         leftPos -= step;
//         if (leftPos <= 0) {
//             leftPos = 0;
//             direction = 'up';
//         }
//     } else if (direction === 'up') {
//         topPos -= step;
//         if (topPos <= 0) {
//             topPos = 0;
//             direction = 'right';
//         }
//     }

//     header.style.top = topPos + 'px';
//     header.style.left = leftPos + 'px';
// }

// setInterval(moveHeader, 1000); // Интервал в миллисекундах (здесь 1000 мс = 1 секунда)


const header = document.querySelector('h1');
let topPos = 0;
let leftPos = 0;
let step = 50;
let direction = "right";

function moveHeader() {
  if (direction === "right") {
    leftPos += 50;
    if (leftPos >= 200) {
      leftPos = 200;
      direction = "down";
    }
  }
  if (direction === "down") {
    topPos += 50;
    if (topPos >= 200) {
      topPos = 200;
      direction = "left";
    }
  }
  if (direction === "left") {
    leftPos -= 50;
    if (leftPos <= 0) {
      leftPos = 0;
      direction = "up";
    }
  }
  if (direction === "up") {
    topPos -= 50;
    if (topPos <= 0) {
      topPos = 0;
      direction = "right";
    }
  }
  header.style.top = topPos + "px";
  header.style.left = leftPos + "px";
}

function clickCount(){
    let count = 0;
    while(count <= 800){
        count++

    }
    }






