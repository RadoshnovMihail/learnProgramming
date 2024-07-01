// Напишите функцию, которая суммирует список, но игнорирует все дубликаты в списке.

// Например, для списка [3, 4, 3, 6] функция должна возвращать 10, а для списка [1, 10, 3, 10, 10] - 4.

let arr = [3, 4, 3, 6];
function sumNoDuplicates(numList) {
  let sum = 0;
  let count = {};
  for (let elem of numList) {
    if (count[elem] === undefined) {
      count[elem] = 1;
    } else {
      count[elem]++;
    }
  }
  for (item in count) {
    if (count[item] === 1) {
      sum += Number(item);
    }
  }
  return sum;
}
console.log(sumNoDuplicates(arr));

//  let a = { 3: 2, 4: 1, 6: 1 };
// for(let elem in a){
// console.log(elem)
// }


let a = [3, 4, 3, 6];

function fun (x){
    // let uniqueArr = [];
    let sum = 0;
    x.forEach(el => {
        if(x.indexOf(el) === x.lastIndexOf(el)){
            // uniqueArr.push(el);
            sum += el;
        }
    });
    return sum;
}

console.log(fun(a))