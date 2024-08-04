// Основная идея заключается в подсчете всех встречающихся символов в строке. Если у вас есть строка типа aba, то результат должен быть {'a': 2, 'b': 1}. А если строка пустая? Тогда результатом должен быть пустой объектный литерал, {}.

function count(string) {
  let obj = {};
  for (let key of string) {
    if (obj[key]) {
      obj[key]++;
    } else {
      obj[key] = 1;
    }
  }
  return obj
}

console.log(count("aba")); //{'a': 2, 'b': 1}


function count (string) {
    return string.split('').reduce(function(counts,char){
      counts[char] = (counts[char]||0) + 1;
      return counts;
    },{});
  }