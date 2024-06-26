// С праздником, друзья Code Warriors!
// Уже почти наступил канун Рождества, поэтому нам нужно приготовить молоко и печенье для Санты! Подождите... когда именно нам нужно это сделать?

// Время для молока и печенья
// Выполните функцию, которая принимает объект Date и возвращает true, если это канун Рождества (24 декабря), false - в противном случае.

// Имейте в виду, что месяц Date в Javascript основан на 0!

// Примеры
// timeForMilkAndCookies(new Date(2013, 11, 24))  // true
// timeForMilkAndCookies(new Date(2013, 0, 23)) // false
// timeForMilkAndCookies(new Date(3000, 11, 24))  // 

function timeForMilkAndCookies(date){
    return date.getMonth() === 11 && date.getDate() === 24 ? true : false
  //  let month = date.getMonth();
  //   let day = dat.getDate();
  //   console.log(month);
  }