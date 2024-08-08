function expandedForm(num) {
    let numStr = String(num);
    let numStrLength = numStr.length;
    let arr = [];
    for(let i = 0; i < numStrLength; i++){
        let value = numStr[i];
        if(value !== '0'){
            let a = value + '0'.repeat(numStrLength - i - 1);
            arr.push(a);
        }
    }
  return arr.join(' + ')
}

console.log(expandedForm(12))// '10 + 2'
console.log(expandedForm(124))// '100 + 20 + 4'
console.log(expandedForm(70304))// '70000 + 300 + 4'



// function expandedForm(num) {
//     let numStr = num.toString(); // Преобразуем число в строку для удобства работы с его разрядами
//     let length = numStr.length; // Определяем длину строки, чтобы знать сколько разрядов в числе
//     let expanded = []; // Массив для хранения частей числа в развернутой форме

//     // Проходим по каждому символу строки числа
//     for (let i = 0; i < length; i++) {
//         // Берем текущий символ и преобразуем его обратно в число
//         let digit = numStr[i];
//         // Вычисляем его корректную позицию умножением на соответствующую степень 10
//         if (digit !== '0') {
//             let expandedPart = digit + '0'.repeat(length - i - 1);
//             expanded.push(expandedPart); // Добавляем развернутую часть в массив
//         }
//     }

    // Соединяем части через ' + ' и возвращаем результат как строку
//     return expanded.join(' + ');
// }

// Примеры использования:
// console.log(expandedForm(12));    // Должен вернуть '10 + 2'
// console.log(expandedForm(42));    // Должен вернуть '40 + 2'
// console.log(expandedForm(70304)); // Должен вернуть '70000 + 300 + 4'



const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");



                            
                            function expandedForm(num) {
                                return String(num)
                                        .split("")
                                        .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
                                        .filter((num) => Number(num) != 0)
                                        .join(" + ")
                              }