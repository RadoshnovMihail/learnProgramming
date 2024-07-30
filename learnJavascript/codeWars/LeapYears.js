// В этом ката вы должны просто определить, является ли данный год високосным или нет. Если вы не знаете правил, то вот они: годы, кратные 4, являются високосными, а годы, кратные 100, не являются високосными, но годы, кратные 400, являются високосными. Проверяемые годы находятся в диапазоне 1600 ≤ год ≤ 4000.

// it("Year 2020 is a leap year", () => {
//     assert.strictEqual(isLeapYear(2020), true, "Incorrect answer for year = 2020");
// });

// it("Year 2000 is a leap year", () => {
//     assert.strictEqual(isLeapYear(2000), true, "Incorrect answer for year = 2000");
// });

// it("Year 2015 is not a leap year", () => {
//     assert.strictEqual(isLeapYear(2015), false, "Incorrect answer for year = 2015");
// });

// it("Year 2100 is not a leap year", () => {
//     assert.strictEqual(isLeapYear(2100), false, "Incorrect answer for year = 2100");
// });
// });

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400) {
        return true;
      } else{
       return false;
      }
     
    }
   
  }
 
}

console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2015)); // false
console.log(isLeapYear(2100)); // falsee


function isLeapYear(year) {
    if (year % 4 === 0) { // 1
      if (year % 100 === 0) { // 2
        if (year % 400 === 0) { // 3
          return true; // 4
        } else { // 5
          return false; // 6
        }
      } else { // 7
        return true; // 8
      }
    } else { // 9
      return false; // 10
    }
  }


  function isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
  }