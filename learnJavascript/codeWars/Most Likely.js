// Создайте функцию, которая сравнивает две вероятности, возвращая true, если первая из них наиболее вероятна, в противном случае false.

// В этом упражнении вероятность выражается двумя числами, разделенными двоеточием. Например, вероятность 1 к 3 будет 1:3.

function mostLikely(prob1, prob2) {
  const arrOne = prob1.split(":").map(Number);
  const arrTwo = prob2.split(":").map(Number);

  const updatedArrOne = arrOne[0] / arrOne[1];
  const updatedArrTwo = arrTwo[0] / arrTwo[1];
  return updatedArrOne > updatedArrTwo;
}

console.log(mostLikely("1:3", "1:2"));
