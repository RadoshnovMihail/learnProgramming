// В вашем классе был тест, и вы его прошли. Поздравляем! Но вы амбициозный человек. Вы хотите узнать, лучше ли вы среднего ученика в вашем классе. Вы получаете массив с результатами тестов ваших сверстников. Теперь вычислите среднее значение и сравните свои баллы! Верните true, если вы лучше, иначе false! Примечание: Ваши баллы не входят в массив баллов вашего класса. Не забывайте о них при вычислении среднего балла!


function betterThanAverage(classPoints, yourPoints) {
  let result = classPoints.reduce((acc, val) => acc + val) / classPoints.length;
  return Math.floor(result) < yourPoints ? true : false;
  }


console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))  //true
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)) // false


function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }