// Задав строку, вы должны вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз. Примеры (вход -> выход): * "String" -> "SSttrriinngg" * "Hello World" -> "HHeelllloo WWoorrlldd" * "1234!_ " -> "11223344!!__ "


function doubleChar(str) {
   let result = '';
   for(let i = 0; i < str.length; i++){
    result += str[i] + str[i];
   }
   return result
  }
  
  console.log(doubleChar("Hello World"));

  const doubleChar = (str) => str.split("").map(c => c + c).join("");

  console.log(doubleChar("Hello World"));