// Предоставлена функция Kata, которая принимает два параметра в следующем порядке: массив, элемент и возвращает индекс элемента, если он найден, и "Не найден" в противном случае. Ваша задача - максимально сократить код, чтобы удовлетворить строгим требованиям Kata по количеству символов (не более 161). Вы можете предположить, что все элементы массива уникальны.

// function find(array, element) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === element) return i;
//     }
//     return "Not found";
//   }

// function find(array, element) {
//   const result = array.indexOf(element);
//   return result !== -1 ? result : "Not found";
// }

// console.log(find([2, 3, 5, 7, 11], 5)); // 2
// console.log(find([2, 3, 5, 7, 11], 6)); // 2

const find = (a, e) => a.includes(e) ? a.indexOf(e) : "Not found"

console.log(find([2, 3, 5, 7, 11], 5)); // 2
console.log(find([2, 3, 5, 7, 11], 6)); // 2