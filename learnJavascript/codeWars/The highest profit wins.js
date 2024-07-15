// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

function minMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return [min, max];
}

console.log(minMax([1, 2, 3, 4, 5]));
