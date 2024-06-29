// Если задана последовательность целых чисел, верните сумму всех целых чисел, имеющих четный индекс (нечетный индекс в COBOL), умноженную на целое число с последним индексом.

// Индексы в последовательности начинаются с 0.

// Если последовательность пуста, вы должны вернуть 0.

// Test.assertEquals(evenLast([2, 3, 4, 5]), 30)

function evenLast(numbers) {
  if(numbers.length === 0){
    return 0;
  }

  let sum = 0;
  for(let i = 0; i < numbers.length; i += 2){
    sum += numbers[i];
  }
  return sum * numbers[numbers.length - 1]
}

console.log(evenLast([2, 3, 4, 5]));

console.log(2.3 % 1 !== 0);
