// Создайте функцию, которая возвращает значение, умноженное на 50 и увеличенное на 6. Если введенное значение является строкой, она должна возвращать "Error".

function problem(x){  
  return typeof x === 'string' ? 'Error' : x * 50 + 6;
}

console.log(problem(5))//256
console.log(problem("Hello"))//"Error"
