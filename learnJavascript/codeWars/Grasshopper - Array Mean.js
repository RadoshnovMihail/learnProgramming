// Найти среднее значение Найти среднее значение списка чисел в массиве. Информация Чтобы найти среднее значение набора чисел, сложите все числа вместе и разделите на количество значений в списке. Для примера список 1, 3, 5, 7 1. Сложите все числа 1+3+5+7 = 16 2. Разделите на количество значений в списке. В данном примере в списке 4 числа. 16/4 = 4 3. Среднее значение (или среднее) этого списка равно 4

function findAverage(nums) {
return nums.reduce((acc, el) => acc + el) / nums.length;
  }

  console.log(findAverage([1, 3, 5, 7]))