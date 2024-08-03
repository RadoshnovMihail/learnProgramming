// Допишите функцию так, чтобы она находила среднее значение из трех переданных ей оценок и возвращала буквенное значение, связанное с этой оценкой. Числовой балл Буквенная оценка 90 <= балл <= 100 'A' 80 <= балл < 90 'B' 70 <= балл < 80 'C' 60 <= балл < 70 'D' 0 <= балл < 60 'F' Проверяемые значения находятся в диапазоне от 0 до 100. Нет необходимости проверять отрицательные значения или значения, превышающие 100.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

function getGrade(s1, s2, s3) {
  let sum = Math.floor((s1 + s2 + s3) / 3);
  if (sum >= 90 && sum <= 100) {
    return "A";
  } else if (sum >= 80 && sum < 90) {
    return "B";
  } else if (sum >= 70 && sum < 80) {
    return "C";
  } else if (sum >= 60 && sum < 70) {
    return "D";
  } else if (sum >= 0 && sum < 60) {
    return "F";
  }
}

console.log(getGrade(95, 90, 93)); // a
console.log(getGrade(70, 70, 100)); // b
console.log(getGrade(75, 70, 79)); // c
console.log(getGrade(66,62,68)); // d
console.log(getGrade(58, 59, 60)); // f

