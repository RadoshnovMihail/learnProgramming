// Имеется массив с некоторыми числами. Все числа равны, кроме одного. Попробуйте найти его! findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2 findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 Гарантируется, что массив содержит не менее 3 чисел. Тесты содержат очень большие массивы, поэтому подумайте о производительности. Это первое ката в серии:

function findUniq(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      result = arr[i];
    }
  }
  return result;
}

console.log(findUniq([1, 0, 0])); // 1

console.log(findUniq([3, 10, 3, 3, 3])); // 10

console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2


function findUniq(arr){
    arr.sort((a,b) => a - b);
    return arr[0] == arr[1] ? arr.pop() : arr[0]
}

