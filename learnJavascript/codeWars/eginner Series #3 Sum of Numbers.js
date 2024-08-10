// Если даны два целых числа a и b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их, и верните ее. Если эти два числа равны, верните a или b. Примечание: a и b не упорядочены!

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b) {
  let res = [];
  if (a === b) {
    return a;
  }
  let arr = [a, b].sort((a, b) => a - b);
  for (let i = arr[0]; i <= arr[1]; i++) {
    res.push(i);
  }
  return res.reduce((acc, val) => acc + val);
}

console.log(getSum(2, 2)); // 2
console.log(getSum(-1, 0)); // -1
console.log(getSum(9, 1)); // 1,2,3,4,5,6,7,8,9


function GetSum( a,b )
{
  tmp = 0;
  
  if(a < b)
    while(a <= b) tmp += a++;
  else
    while(a >= b) tmp += a--;
      
  return tmp;
}