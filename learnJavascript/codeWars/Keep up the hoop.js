// Алексу только что подарили новый обруч, он его обожает, но чувствует себя удрученным, потому что его младший брат играет лучше него.

// Напишите программу, в которой Алекс может ввести (n) количество оборотов обруча, и она выдаст ему ободряющее сообщение:

// Если Алекс прокрутит 10 или более обручей, то вернется строка "Отлично, теперь переходим к трюкам".
// Если он не получит 10 обручей, вернется строка "Продолжай, пока не получишь".

function hoopCount(n) {
  return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}
console.log(hoopCount(10));



// if (n > 10) {
//     return "Great, now move on to tricks";
//   } else {
//     return "Keep at it until you get it";
//   }