// Если задано целое число, верните строку со знаками тире '-' перед и после каждой нечетной цифры, но не начинайте и не заканчивайте строку знаком тире.

function dashatize(num) {
    let result = num.toString().split('').map(el => el % 2 === 0)
    return result
  }

console.log(dashatize(274))//'2-7-4'
console.log(dashatize(815))//'68-1-5'