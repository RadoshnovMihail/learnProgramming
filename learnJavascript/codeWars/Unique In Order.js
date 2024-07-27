// Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность и возвращает список элементов, в котором нет ни одного элемента с одинаковым значением, расположенного рядом друг с другом и сохраняющего исходный порядок элементов.

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
  let result = [];
  let typeValues = typeof iterable !== "string" ? iterable : iterable.split("");
  for (let i = 0; i < typeValues.length; i++) {
   if(i === 0 || typeValues[i] !== typeValues[i - 1]){
    result.push(typeValues[i])
   }
  }
  return result;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB")); //['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder([1, 2, 2, 3, 3]));// ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder("ABBCcAD"));// [1,2,3]



var uniqueInOrder = function (iterable) {
   return [...iterable].filter((el, i) => el !== iterable[i - 1])
}

console.log(uniqueInOrder("AAAABBBCCDAABBB")); //['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder([1, 2, 2, 3, 3]));// ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder("ABBCcAD"));// [1,2,3]
