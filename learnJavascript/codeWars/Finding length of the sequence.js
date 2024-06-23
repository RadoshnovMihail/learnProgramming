// В рамках этого ката вам нужно найти длину подмассива, который начинается и заканчивается указанным числом.

// Например, если массив arr имеет вид [0, -3, 7, 4, 0, 3, 7, 9], то при нахождении длины подмассива, который начинается и заканчивается цифрой 7s, вы получите результат 5.

// Для простоты в предоставленном массиве будут только числа (положительные или отрицательные).

// Если в массиве меньше или больше двух вхождений искомого числа, возвращается 0.
// [-7, 6, 2, -7, 4], -7), 4,

var lengthOfSequence = function (arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      result.push(i);
    }
  }
  if(result.length !== 2){
    return 0;
  }
  return result[1] - result[0] + 1;
};



console.log(lengthOfSequence([-7, 6, 2, -7, 4], -7));

var lengthOfSequence1 = function (arr, n) {
  let indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      indices.push(i);
    }
  }

  if (indices.length !== 2) {
    return 0;
  }

  return Math.abs(indices[1] - indices[0]) + 1;
};

console.log(lengthOfSequence1([-7, 6, 2, -7, 4], -7));
