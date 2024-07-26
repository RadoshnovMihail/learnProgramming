// Небезызвестный капитан Шнайдер дал вам очень простое задание. Все данные, которые проходят через систему, должны быть уверены, что свет увидят только неспециальные символы. Создайте функцию, которая, учитывая строку, сохраняет только буквы A-Z (заглавные и строчные), цифры 0-9 и пробельные символы. Кроме того, она возвращает "Not a string!", если тип записи не является строкой.

function nothingSpecial(str) {
    // let result = '';
    if(typeof str !== "string"){
        return "Not a string!"
    } else {
      return str.replace(/[^a-zA-Z0-9\s]/ig, "")
    }
    // return result
  }

  console.log(nothingSpecial('%^Take le$ft ##quad%r&a&nt'))
  console.log(nothingSpecial('Hello World!'))
  console.log(nothingSpecial('St@arboard P^ort'))


  function nothingSpecial(str) {
    return typeof str === "string" ? str.replace(/[^a-z\d\s]+/ig, "") : "Not a string!"
  }