let day = new Date();
let month = new Date();
let year = new Date();

window.addEventListener("load", outputDate);

function outputDate() {
  let getDay = day.getDate();
  let getMonth = "";
  let getYear = year.getFullYear();
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
  for (let i = 0; i < arr.length; i++) {
    if (month.getMonth() == i) {
      getMonth = arr[i];
      break;
    }
  }
  document.getElementById(
    "god"
  ).innerHTML = `${getDay} ${getMonth} ${getYear} года`;

  let hour = new Date();
  let minutes = new Date();
  let time = new Date();

  let getHour = hour.getHours();
  let getMinutes = minutes.getMinutes();
  let getTime = time.getSeconds();

  let getStrMinutes = '' + getMinutes
  let getStrTime = '' + getTime;

  if(getStrMinutes.length == 1){
    getMinutes = '0' + getMinutes
  }
  if(getStrTime.length == 1){
    getTime = '0' + getTime
  }

  document.getElementById(
    "min"
  ).innerHTML = `${getHour} : ${getMinutes} : ${getTime}`;
  window.setTimeout(outputDate, 1000)
}
