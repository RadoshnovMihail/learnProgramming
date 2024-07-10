// Анаграмма - это результат перестановки букв в слове для получения нового слова (см. Википедию). Примечание: анаграммы не зависят от регистра Завершите функцию, чтобы она возвращала true, если два заданных аргумента являются анаграммами друг друга; в противном случае возвращайте false. Примеры "foefet" является анаграммой "toffee" "Buckethead" является анаграммой "DeathCubeK"

var isAnagram = function (test, original) {
  let strOne = test.split("").sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  }).join().toLowerCase();
  console.log(strOne)
  let strTwo = original.split("").sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  }).join().toLowerCase();
  console.log(strTwo)
  return strOne === strTwo
};

console.log(isAnagram("foefet", "toffee"));
console.log(isAnagram("Buckethead", "DeathCubeK"));


const isAnagram = (test, original) => test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('');
console.log(isAnagram("Buckethead", "DeathCubeK"))