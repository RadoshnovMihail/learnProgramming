function pipeFix(numbers) {
  let result = [];
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9])); //[1,2,3,4,5,6,7,8,9]
console.log(pipeFix([1, 2, 3, 12])); //[1,2,3,4,5,6,7,8,9,10,11,12]
