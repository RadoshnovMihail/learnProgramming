// Создайте функцию, которая выдает персональное приветствие. Эта функция принимает два параметра: имя и владелец. Используйте условные обозначения, чтобы вернуть нужное сообщение: case return name равно owner 'Hello boss' otherwise 'Hello guest'

function greet (name, owner) {
   return name === owner ? 'Hello boss' : 'Hello guest' 
  }

  console.log(greet('Daniel', 'Daniel'))
  console.log(greet('Greg', 'Daniel'))