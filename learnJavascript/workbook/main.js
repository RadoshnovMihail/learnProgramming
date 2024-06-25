// function sayHi () {
//   alert('Hello');
// }

// window.onload = () => {
//  document.getElementById('button').onclick = sayHi;
// };

// window.onload = () => {
//    document.getElementById('button').onclick = () => alert('Hello');
//    document.getElementById('button-2').onclick = sayHi_2;
//    document.getElementById('button-3').onclick = sayHi_3;
// }

// window.onload = () => {
//   document.getElementById('button').onclick = func;
// };

// function func(){
//   document.getElementById('button-2').onclick = sayHi_2;
// }

// window.onload = () =>{
//   document.getElementById('button').onclick = sayHi;
//   func();
// }

// window.addEventListener('load', start);
// window.addEventListener('load', func);

// window.addEventListener('load', start);
// window.addEventListener('load', function(){

// });

// window.addEventListener('load', start);

// window.onload = () => {
//   document.getElementById("button").onclick = () => alert("Hello");
//   document.getElementById("button-2").onclick = sayHi_2;
//   document.getElementById("button-3").onclick = sayHi_3;
// };

//   function sayHi() {
//     alert("Hello");
//   }
//   function sayHi_2() {
//     alert("Hello 2");
//   }
//   function sayHi_3() {
//     alert("Hello 3");
//   }

//   function func (){
//     document.getElementById('button-2').addEventListener('click', sayHi_2);
//   }

// window.addEventListener("load", function () {
//   document.getElementById('button').addEventListener('click', sayHi);
//  func();
// });

// window.addEventListener('load', function(){
//   let w = screen.width;
//   let h = screen.height;
//   document.getElementById('si').innerHTML = w + ' x ' + h;
// });

// window.addEventListener("load", tim);
// function tim() {
//   let den = new Date();
//   let mes = new Date();
//   let mon = "";
//   let arr = [
//     "января",
//     "февраля",
//     "марта",
//     "апреля",
//     "мая",
//     "июня",
//     "июля",
//     " августа",
//     "сентября",
//     "октября",
//     "ноября",
//     "декабря",
//   ];
//   for (let i = 0; i < 12; i++) {
//     if (mes.getMonth() == i) {
//       mon = arr[i];
//       break;
//     }
//   }
//   let god = new Date();
//   document.getElementById("god").innerHTML =
//     den.getDate() + " " + mon + " " + god.getFullYear() + "года";
//   let cha = new Date();
//   let min = new Date();
//   let sek = new Date();
//   let m = min.getMinutes();
//   let mi = "" + m;
//   if (mi.length == 1) {
//     m = "0" + m;
//   }
//   let s = sek.getSeconds();
//   let se = "" + s;
//   if (se.length == 1) {
//     s = "0" + s;
//   }
// }
// document.getElementById("min").innerHTML = cha.getHours() + ":" + m + ":" + s;
// window.setTimeout(tim, 1000);

// let a = new Date();
// let b = a.getMinutes();
// console.log(b);

// window.addEventListener("load", function () {
//   document.getElementById("con").addEventListener("click", function () {
//     if (
//       window.confirm("Вы действительно хотите покинуть эту страницу?") == true
//     ) {
//       window.location = "http://testjs.ru/";
//     }
//     return false;
//   });
// });

// window.addEventListener("load", () => {
// document.getElementById("con").addEventListener("click", () => {
//   if (
//     confirm('"Вы действительно хотите покинуть эту страницу?') == true
//   ) {
//    window.location = "http://testjs.ru/";
//   }
//   return false;
// });
// });
// let i = 1;

// window.addEventListener("load", () => {
//   document.getElementById("flo").addEventListener("click", tra);
// });

// function tra() {
//   if (i == 1) {
//     document.getElementById("flo").style.transition = "width 1s";
//     document.getElementById("flo").style.width = "500px";
//     i = 2;
//   } else {
//     document.getElementById("flo").style.transition = "width 1s";
//     document.getElementById("flo").style.width = "200px";
//     i = 1;
//   }
//   return false;
// }

// let direction = 1;

// window.addEventListener("load", () => {
//   document.getElementById("flo").addEventListener("click", tra);
// });

// function tra() {
//   if (direction == 1) {
//     document.getElementById("flo").style.transition = "width 1s";
//     document.getElementById("flo").style.width = "500px";
//     direction = 2;
//   } else {
//     document.getElementById("flo").style.transition = "width 1s";
//     document.getElementById("flo").style.width = "200px";
//     direction = 1;
//   }
//   return false;
// }

// window.addEventListener("load", () => {
//   document.getElementById("pic").addEventListener("click", (event) => {
//     if (event.target.tagName == "BUTTON") {
//       let a = event.target.id;
//       document.getElementById("im").src = "/images/anim/" + a + ".jpg";
//       document.getElementById("im").style.border = "1px solid #000000";
//     }
//   });
// });

window.addEventListener("load", function () {
  document.getElementById("pic").addEventListener("click", function (event) {
    if (event.target.tagName == "BUTTON") {
      let getBtnId = event.target.id;
      document.getElementById("im").src = "/images/anim/" + getBtnId + ".jpg";
      document.getElementById("im").style.border = "1px solid #000000";
    }
  });
});
