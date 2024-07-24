// Между каждыми двумя синими бусинами помещаются две красные. Имеется N синих бусин. Посмотрев на расположение ниже, определите количество красных бусин.
// Если синих бусин меньше 2, верните 0.

// Test.assertEquals(countRedBeads(0), 0);
// Test.assertEquals(countRedBeads(1), 0);
// Test.assertEquals(countRedBeads(3), 4);
// Test.assertEquals(countRedBeads(5), 8);

function countRedBeads(n) {
  let result = 0;
  if (n <= 2) {
    return 0;
  } else {
    result = n - 2;
  }
  return result + n;
}

console.log(countRedBeads(1)); // 0
console.log(countRedBeads(5)); // 8



function countRedBeads(n) {
    return n < 2 ? 0 : 2 * n - 2;
  }