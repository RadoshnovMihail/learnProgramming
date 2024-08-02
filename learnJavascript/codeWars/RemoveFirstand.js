// Все довольно просто. Ваша цель - создать функцию, которая удаляет первый и последний символы строки. Вам дан один параметр - исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов.


function removeChar(str){
  return str.slice(1, -1)
   };
   
console.log(removeChar('eloquent')) // 'loquen'  
console.log(removeChar('country'))   //'ountr'
console.log(removeChar('person'))   //'erso'