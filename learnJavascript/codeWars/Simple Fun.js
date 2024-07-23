// Задача Получив строку str, переверните ее и опустите все неалфавитные символы. Пример Для str = "krishan" выведите "nahsirk". Для str = "ultr53o?n" выведите "nortlu". Ввод/вывод [input] string str Строка состоит из строчных латинских букв, цифр и символов. [output] a string

function reverseLetter(str) {
  let result = str.split('').reverse().join('').replace(/\W|_/g, '')
  return result.replace(/[0-9]/g, '');
}

console.log(reverseLetter("krishan")); // "nahsirk"
console.log(reverseLetter("ultr53o?n")); // "nortlu"
