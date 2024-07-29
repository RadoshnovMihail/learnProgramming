function expressionMatter(a, b, c) {
   return Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c)
  }


console.log(expressionMatter(2,1,2)) //6
console.log(expressionMatter(2,1,1)) //4
console.log(expressionMatter(1,1,1)) //3
console.log(expressionMatter(1,2,3)) //9
console.log(expressionMatter(1,3,1)) //5
console.log(expressionMatter(2,2,2)) // 8


//   assert.strictEqual(expressionMatter(2, 1, 2), 6);
//   assert.strictEqual(expressionMatter(2, 1, 1), 4);
//   assert.strictEqual(expressionMatter(1, 1, 1), 3);
//   assert.strictEqual(expressionMatter(1, 2, 3), 9);
//   assert.strictEqual(expressionMatter(1, 3, 1), 5);
//   assert.strictEqual(expressionMatter(2, 2, 2), 8);


 //  let num1 = a * (b + c)
  //  let num2 = a * b * c
  //  let num3 = a + b * c
  //  let num4 = (a + b) * c
  //  let result = num1 