// Напишите решение для очистки массивов. Оно может полностью состоять из функции squeakyClean или содержать несколько вспомогательных функций.

// Ваша функция squeakyClean должна принимать входной массив значений и возвращать новый массив, из которого удалены все пустые строки, 0, null и undefined.

// Пример:

// var originalArray = ['click1','click2',null,'','','submitForm'];
// Написанное вами решение должно возвращать следующее:

// var cleanedArray = ['click1','click2','submitForm'].

let originalArray = ["click1", "click2", null, "", "", "submitForm"];

function squeakyClean(arr) {
  let newArr = [...arr];
  arr.forEach((elem) => {
    if (elem === "") {
      newArr.splice; 
    }
  });
}

console.log(arr(originalArray));
