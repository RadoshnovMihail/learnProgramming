// Если задан массив, содержащий ровно 5 строк "a", "b" или "c" (chars в Java, characters в Fortran), проверьте, содержит ли массив три и два одинаковых значения.

// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

function checkThreeAndTwo(array) {
  count = {};
  for (const char of array) {
    count[char] = (count[char] || 0) + 1;
  }
  let foundThree = false;
  let foundTwo = false;
  for (let num of Object.values(count)) {
    if (num === 3) {
      foundThree = true;
    }
    if (num === 2) {
      foundTwo = true;
    }
  }
  return foundThree && foundTwo;
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"])); // 3x "a" and 2x "b"
