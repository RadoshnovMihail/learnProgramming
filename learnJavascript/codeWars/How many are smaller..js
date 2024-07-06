// Напишите функцию, которая, задавая массив arr, возвращает массив, содержащий при каждом индексе i количество чисел, меньших, чем arr[i] справа.

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]
function countSmallerToRight(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                count++;
            }
        }
        result.push(count);
    }
    
    return result;
}

// Test cases
console.log(countSmallerToRight([5, 4, 3, 2, 1])); // Output: [4, 3, 2, 1, 0]
console.log(countSmallerToRight([1, 2, 0])); // Output: [1, 1, 0]


