// //1.Регистрация обработчика как ответ на событие load. Например, так:
// window.onload = function(){
//     document.getElementById('im').onclick = function(){

//     };
// };

// //или так:
// window.onload = function(){
//     document.getElementById('im').onclick = func;
// };

// //Регистрация сразу нескольких обработчиков. Пример:

// window.onload = function(){
//     document.getElementById('im').onclick = fun;
//     document.getElementById('im').onmouseout = doc;
//     document.getElementById('im').onmouseout = res;
// };

// // 3.Комбинированная регистрация - когда одни функции регистрируются, а другие запускаются без предварительной регистрации из уже зарегистрированных. Может выглядеть так:

// window.onload = function(){
//     document.getElementById('im').onclick = func;
// };

// function func(){
//     sum();
// }

// // 4.Еще один комбинированный случай - регистрация обработчика и одновременный запуск внешней функции:

// window.onload = function(){
//     document.getElementById('im').onclick = func;
//     sum();
// };

// // 5. Регистрация обработчиков методом addEventLister. Метод принимает три аргумента. Два из них обязательные. Первый - тип события. Второй - функция, "реагирующая" на событие, или имя внешней функции. Третий аргумент - булево значение, которое допустимо не указывать. Методом addEventLister можно регистрировать обработчики так:

// window.addEventListener('load', start);
// window.addEventListener('load',func);

// //или так:

// window.addEventListener('load',start);
// window.addEventListener('load',function(){

// });

// //и даже так:

// window.addEventListener('load',start);
// window.addEventListener('load', function(){
//     document.getElementById('im').addEventListener('click', fucnc);
//     document.getElementById('im').addEventListener('mouseout', doc);
//     document.getElementById('im').addEventListener('mouseover', res);
// });

// // Мы разобрали варианты применения addEventListener на примере регистрации обработчика для события load. Но этим методом можно регистрировать обработчики любых других событий. Например, так:

// window.addEventListener('load', function(){
//     document.getElementById('im').addEventListener('click', func);
// });

// // или так:

// window.addEventListener('load', function(){
//     document.getElementById('im').addEventListener('click', function(){

//     });
// });

// //и даже вот так:

// window.addEventListener('load', function(){
//     document.getElementById('im').addEventListener('click',  func);
// });
// function func (){
// document.getElementById('te').addEventListener('click', doc);
// }

// function doc (){

// }

// Наконец, есть еще один способ регистрации обрабоичика методом addEventLister. Он в определенном смысле проще. Чтобы прнять его, посмотрите пример вот такой страницы:

// <!DOCTYPE html>
// <html lang="ru">
// <head>
// <meta charset="utf-8">
// <title>Регистрация обрабочика</title>
// </head>
// <body>
// ...
// 18
// </body>
// </html>
// <script>
// document.getElementById("im").addEventListener("click", func);
// function func()
// {
// ...
// }
// </script>

// В интернете есть много сервисов, с помощью которых легко определить разрешение экрана компьютера, если оно вам не известно.

// <!DOCTYPE html>
// <html lang="ru">
// <head>
// <meta charset="utf-8">
// <title>Событие load</title>
// <script>
// window.addEventListener("load", function()
// {
// let w=screen.width;
// let h=screen.height;
// document.getElementById("si").innerHTML=w+" x "+h;
// });
// </script>
// </head>
// <body>
// Размер экрана - <span id="si"></span>
// </body>
// </html>

//Объявляем две переменные и присваиваем им значения, полученные из объекта screen (в пикселях):
// window.addEventListener('load',() => {
//     let w = screen.width;
//     let h = screen.height;
//     //Выводим на экран:
//     document.getElementById('si').innerHTML = w + ' x ' + h;
// });
//Все.
// Итак, как только страница загрузилась полностью произошло событие load, которому мы приписали один обработчик - анонимную функцию. Внутри функции выполнено определение размеров манитора, после чего эти параметры были выведены на экран.

//Вписыаем внутри тегов строков, вызывающую обработчик события load:

window.addEventListener("load", tim);
//И так функция-обработчик получила название tim. Начнем разбираться, что она делает. Для определения даты и времени в javascript существует объект Date. Он содержит информацию о количестве милисекунд, прошедших с 1 января 1970 года.
function tim() {
  let den = new Date();
  let mes = new Date();
  let mon = "";
  let arr = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    " августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  for (let i = 0; i < 12; i++) {
    if (mes.getMonth() == i) {
      mon = arr[i];
      break;
    }
  }
  let god = new Date();
  document.getElementById("god").innerHTML =
    den.getDate() + " + mon + " + god.getFullYear() + " года";

let cha = new Date();
let min = new Date();
let sek = new Date();
let m = min.getMinutes();
let mi = '' + m;
if(mi.length == 1){
    m = '0' + m;
}
let s = sek.getSeconds();
let se='' + s;
if(se.length == 1){
    s = '0' + s;
}
document.getElementById('min').innerHTML = cha.getHours() + ':' + m + ':' + s;
window.setTimeout(tim, 1000);
}



