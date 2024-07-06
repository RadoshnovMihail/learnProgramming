// Вы спрашиваете маленькую девочку: "Сколько тебе лет?". Она всегда отвечает "x лет", где x - случайное число от 0 до 9. Напишите программу, которая возвращает возраст девочки (0-9) в виде целого числа. Предположим, что тестовая входная строка всегда является допустимой строкой. Например, тестовый ввод может быть "1 год" или "5 лет". Первым символом в строке всегда является число.

function getAge(inputString){
let result = inputString.charAt();
return Number(result)
}

console.log(getAge("4 years old"))




function getAge(inputString){
return parseInt(inputString)
}

console.log(getAge("4 years old"))