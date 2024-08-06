// Доработайте решение так, чтобы оно разбивало строку на пары из двух символов. Если строка содержит нечетное количество символов, то недостающий второй символ последней пары следует заменить знаком подчеркивания ('_').

function solution(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    let a = str.slice(i, i + 2);
    if (a.length === 1) {
      a += "_";
    }
    result.push(a);
  }
  return result;
}

console.log(solution("abc")); // ['ab', 'c_']
console.log(solution("abcdef")); // ['ab', 'cd', 'ef']

function solutionOne(str) {
  let pointer = 0;
  let result = [];
  let oddEven = str % 2 !== 0 ? str + "_" : str;
  while (pointer < str.length) {
    result.push(oddEven[pointer] + oddEven[pointer + 1]);
    pointer += 2;
  }
  return result;
}

console.log(solutionOne("abc")); // ['ab', 'c_']
console.log(solutionOne("abcdef")); // ['ab', 'cd', 'ef']