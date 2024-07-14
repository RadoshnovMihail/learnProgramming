window.addEventListener("click", frog);
window.addEventListener("load", () => {
  document.getElementById("fr").addEventListener("click", coor);
});

let initialPositionX = 0;
let initialPositionY = 0;
let pointer = 1;
let valuePositionX = 0;

function coor(event) {
  if (pointer == 1) {
    initialPositionX = event.pageX;
    initialPositionY = event.pageY;

    pointer = 2;
    valuePositionX = initialPositionX;
  }
}

function frog(event) {
  if (pointer == 2) {
    let nextPositionX = event.pageX;
    let nextPositionY = event.pageY;

    let comparisonPositionX = nextPositionX - initialPositionX;
    let comparisonPositionY = nextPositionY - initialPositionY;

    if (valuePositionX < comparisonPositionX) {
      document.getElementById("fr").src = "/images/frog_a.png";
    } else {
      document.getElementById("fr").src = "/images/frog_b.png";
    }
    document.getElementById("fr").style.left = comparisonPositionX + "px";
    document.getElementById("fr").style.top = comparisonPositionY + "px";

    valuePositionX = nextPositionX;
  }
}
