Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].


 const flattenAndSort = (x) => x.flat().sort((a, b)=> a - b)
  

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))


let result = x.filter(item => item != '').flat().sort((a, b) => a - b)

let sort = (array) => [].concat(...array).sort((a, b) => a - b)
console.log(sort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))




const fox = (x) => [].concat(...x)


console.log(fox([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))
