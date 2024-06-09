// Вам даны два отсортированных массива, оба из которых содержат только целые числа. Ваша задача - найти способ объединить их в один, отсортированный в порядке возрастания. Выполните функцию mergeArrays(arr1, arr2), где arr1 и arr2 - исходные отсортированные массивы.

// Вам не нужно беспокоиться о проверке, так как arr1 и arr2 должны быть массивами с 0 или более Integer. Если и arr1, и arr2 пусты, то просто верните пустой массив.

// Примечание: массивы arr1 и arr2 могут быть отсортированы в разных порядках. Также arr1 и arr2 могут содержать одинаковые целые числа. Удалите дубликаты в возвращаемом результате.

// [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr1.concat(arr2);
// let result = arr1.concat(arr2);
//   return result.sort((a, b)=> a - b)
let first = [1, 3, 5, 7, 9, 11, 12];
let second = [1, 2, 3, 4, 5, 10, 12];

function mergeArrays(arr1, arr2) {
  let union = arr1.concat(arr2);
  let removingDuplicates = union.filter((value, index) => {
    return union.indexOf(value) == index;
  });
  return removingDuplicates.sort((a, b) => a - b);
}

console.log(mergeArrays(first, second));
