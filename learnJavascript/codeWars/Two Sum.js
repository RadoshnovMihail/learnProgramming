// Напишите функцию, которая принимает массив чисел (целые числа для тестов) и целевое число. Она должна находить в массиве два разных элемента, которые при сложении дают целевое значение. Индексы этих элементов должны быть возвращены в виде кортежа/списка (в зависимости от языка), например: (index1, index2).

// Для целей этого ката некоторые тесты могут иметь несколько ответов; принимаются любые правильные решения.

// Входные данные всегда будут корректными (числа будут представлять собой массив длины 2 или больше, и все элементы будут числами; цель всегда будет суммой двух различных элементов из этого массива).

// Основано на: https://leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // возвращает [0, 2] или [2, 0]
// twoSum([3, 2, 4], 6) // возвращает [1, 2] или [2, 1]

const arr = [1, 2, 3];
const num = 4;

function twoSum(numbers, target) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
}

console.log(twoSum(arr, 4));

const arr1 = [1, 2, 3];
const num1 = 4;

function abc(arr, target) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    const num = target - arr[i];
    if (obj[num]) {
      return [i, obj[num]];
    }
  }
}

console.log(abc(arr1, num1));


