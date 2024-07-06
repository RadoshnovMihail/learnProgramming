// Задав строку, удалите из нее все символы, которые являются уникальными. Пример: вход: "abccdefee" выход: "cceee"

function onlyDuplicates(str) {
  return str.split('').filter((el, index, arr) => arr.indexOf(el) !== index || arr.lastIndexOf(el) !== index).join('')
}
console.log(onlyDuplicates("abccdefee")); //"cceee"


// function onlyDuplicates(str) {
//     return str.split('').filter((el => str.indexOf(el) != str.lastIndexOf(el))).join('');
//   }

let onlyDuplicates = (str) => str.split('').filter((el) => str.indexOf(el) != str.lastIndexOf(el)).join('');