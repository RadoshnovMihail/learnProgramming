// Создайте функцию или вызываемый объект, который принимает целое число в качестве аргумента и возвращает "Even" для четных чисел или "Odd" для нечетных. Функция также должна возвращать "Even" или "Odd" при обращении к значению по целочисленному индексу.

// Например:

// evenOrOdd(2); //'Even'
// evenOrOdd[2]; //'Четное'
// evenOrOdd(7); //'Нечетный'
// evenOrOdd[7]; //'Odd'

// const evenOrOdd = new Proxy({}, {
//     get: function(target, prop) {
//         if (Number(prop) === parseInt(prop, 10)) {
//             return parseInt(prop, 10) % 2 === 0 ? 'Even' : 'Odd';
//         }
//         return undefined;
//     },
//     apply: function(target, thisArg, argumentsList) {
//         const num = argumentsList[0];
//         return num % 2 === 0 ? 'Even' : 'Odd';
//     }
// });

// function evenOrOdd(item) {
//   if (item % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
let b = 3;
let a = [2];

function evenOrOdd(ell) {
  let result = "";
  if (!Array.isArray(ell)) {
    return ell % 2 === 0 ? "Even" : "Odd";
  } else {
    for (let i = 0; i < ell.length; i++) {
      ell % 2 === 0 ? (result = "Even") : (result = "Odd");
    }
  }
  return result;
}

console.log(evenOrOdd(b));
