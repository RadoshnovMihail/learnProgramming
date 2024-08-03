// Ваша задача - сделать две функции (max и min, или maximum и minimum, и т. д., в зависимости от языка), которые получают на вход список целых чисел и возвращают наибольшее и наименьшее число в этом списке соответственно.

// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

var min = function(list){
    
    return list.reduce((acc, val) => acc > val ? val : acc)
}

var max = function(list){
    
    return list.reduce((acc, val) => acc < val ? val : acc)
}

console.log(min([4,6,2,1,9,63,-134,566]))
console.log(max([4,6,2,1,9,63,-134,566]))



const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);