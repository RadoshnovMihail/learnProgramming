// Дружище воин кода, нам нужна твоя помощь! Похоже, мы потеряли один из элементов нашей последовательности, и нам нужна ваша помощь, чтобы восстановить его! Наша последовательность должна была содержать все целые числа от 0 до 9 (без особого порядка), но, похоже, один из них отсутствует. Напишите функцию, которая принимает последовательность уникальных целых чисел от 0 до 9 (включительно) и возвращает недостающий элемент.

// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3


function getMissingElement(superImportantArray){
    let result = 0;
    for(let i = 0; i <= 9; i++){
        if(!superImportantArray.includes(i)){
            result = i;
        }
    }
    return result
  }

  console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])) // 8
  console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]))// 3