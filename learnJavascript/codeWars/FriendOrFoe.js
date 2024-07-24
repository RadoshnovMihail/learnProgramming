// Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей. Если в имени ровно 4 буквы, вы можете быть уверены, что это ваш друг! В противном случае вы можете быть уверены, что это не он... Например: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"] Т.е. друг {"Ryan", "Kieran", "Mark"} Если друзей нет, верните {""}. Примечание: сохраните исходный порядок имен в выводе.


function friend(friends){
let result = friends.filter(el => el.length == 4)
 return result
  }

  console.log(friend( ["Ryan", "Kieran", "Jason", "Yous"])) // ["Ryan", "Yous"]