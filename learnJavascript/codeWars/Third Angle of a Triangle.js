// Вам даны два внутренних угла (в градусах) треугольника. Напишите функцию, возвращающую 3-й угол. Примечание: проверяться будут только положительные целые числа.

function otherAngle(a, b) {
    return 180 - a - b
  }

  console.log(otherAngle(30, 60)) // 90
  console.log(otherAngle(60, 60)) // 60