// Ваша задача - создать функцию, которая может принимать в качестве аргумента любое неотрицательное целое число и возвращать его с цифрами в порядке убывания. По сути, нужно переставить цифры так, чтобы получилось максимально возможное число.

function descendingOrder(n){
   return parseInt(String(n).split('').map(Number).sort((a, b) => b - a).join(''),10);
  }

  console.log(descendingOrder(42145)) //54421
  console.log(descendingOrder(145263))//654321
  console.log(descendingOrder(123456789))//987654321
  console.log(descendingOrder(0))//0