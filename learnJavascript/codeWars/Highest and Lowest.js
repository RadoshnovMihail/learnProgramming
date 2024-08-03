// В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


function highAndLow(numbers){
   let arr = numbers.split(' ').map(Number);
   let max = Math.max(...arr);
   let min = Math.min(...arr);
   return max + ' ' + min;
}
  console.log(highAndLow("1 2 3 4 5")) // return "5 1"
  console.log(highAndLow("1 2 -3 4 5")) // return "5 -3"
  console.log(highAndLow("1 9 3 4 -5")) //  return "9 -5"