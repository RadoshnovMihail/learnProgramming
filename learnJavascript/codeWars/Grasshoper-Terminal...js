// Создайте боевую функцию, которая принимает текущее здоровье игрока и количество полученного урона и возвращает новое здоровье игрока. Здоровье не может быть меньше 0


function combat(health, damage) {
   return health  > damage ? health - damage : 0;
  }
