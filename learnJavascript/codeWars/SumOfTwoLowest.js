// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел, заданную массивом из минимум 4 положительных целых чисел. Например, при передаче массива [19, 5, 42, 2, 77] на выходе должно получиться 7. [10, 343445353, 3453445, 3453545353453] должно вернуть 3453455.


const sumTwoSmallestNumbers = numbers => numbers.sort((a, b) => a - b).splice(0, 2).reduce((acc, val) => acc + val);

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // 7