// Задание Вам будет дан массив чисел. Вы должны отсортировать нечетные числа по возрастанию, оставив четные на своих местах. Примеры [7, 1] => [1, 7] [5, 8, 6, 3, 4] => [3, 8, 6, 5, 4] [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  const a = array
    .slice()
    .filter((el) => {
      return el % 2 !== 0;
    })
    .sort((a, b) => a - b);
  let result = array.map((item) => {
    if (item % 2 !== 0) {
   return a.shift();
    } else {
        return item
    }
  });
  return result;
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); //[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]







// function sortArray(array) {
//     // 1. Extract odd numbers and sort them
//     const oddNumbers = array
//       .slice()
//       .filter((el) => el % 2 !== 0)
//       .sort((a, b) => a - b);
  
//     // 2. Iterate over the original array
//     const result = array.map((item, index) => {
//       if (item % 2 !== 0) { // If the element is odd
//         // Replace with the next sorted odd number
//         return oddNumbers.shift(); 
//       } else { // If the element is even
//         return item; // Keep it as is
//       }
//     });
//     return result;
//   }
  
//   console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); 
  