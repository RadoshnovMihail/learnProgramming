let direction = 1;
window.addEventListener("load", () => {
  document.getElementById("flo").addEventListener("click", flo);
});

function flo() {
  if (direction == 1) {
    document.getElementById("flo").style.transition = "width 1s";
    document.getElementById("flo").style.width = "500px";
    direction = 2;
  } else {
    document.getElementById("flo").style.transition = "width 1s";
    document.getElementById("flo").style.width = "200px";
    direction = 1;
  }
}
