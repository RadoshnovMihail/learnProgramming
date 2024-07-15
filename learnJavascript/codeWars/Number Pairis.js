// Цель этого ката - сравнить каждую пару целых чисел из двух массивов и вернуть новый массив больших чисел. Примечание: оба массива имеют одинаковые размеры. Пример: let arr1 = [13, 64, 15, 17, 88]; let arr2 = [23, 14, 53, 17, 80]; getLargerNumbers(arr1, arr2); // Возвращает [23, 64, 53, 17, 88].

function getLargerNumbers(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      result.push(a[i]);
    } else {
      result.push(b[i]);
    }
  }
  return result;
}

console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80])); //[23, 64, 53, 17, 88]


const getLargerNumbers = (a, b) => a.map((el, i) => Math.max(el, b[i]));

console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80])); //[23, 64, 53, 17, 88]


const getLargerNumbers = (a, b) => a.map((el, i) => b[i] < el ? el : b[i]);

console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80])); //[23, 64, 53, 17, 88]