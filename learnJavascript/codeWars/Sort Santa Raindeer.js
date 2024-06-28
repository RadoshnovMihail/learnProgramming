// С праздником, друзья Code Warriors!
// Теперь, Dasher! Теперь, Танцор! Теперь, Prancer и Vixen! Вперед, Комета! На, Купидон! Дондер и Блитцен! Именно в таком порядке Санта хотел видеть своих оленей... верно? Что значит, он хочет, чтобы они шли по фамилиям!? Похоже, нам нужна твоя помощь, Кодовый Воин!

// Сортировка оленей Санты
// Напишите функцию, которая принимает последовательность имен оленей и возвращает последовательность с именами оленей, отсортированных по фамилиям.

// Примечания:
// Гарантируется, что каждая строка состоит из двух слов, разделенных одним пробелом.
// В случае двух одинаковых фамилий сохраняется исходный порядок.
// Примеры
// Для данного ввода:

// [
//   "Dasher Tonoyan",
//   "Танцор Мур",
//   "Prancer Chua",
//   "Виксен Холл",
//   "Комета Каравани",
//   "Купидон Форутан",
//   "Дондер Джонкер",
//   "Блитцен Клаус"
// ]
// Вы должны получить следующее сообщение:

// [
//   "Prancer Chua",
//   "Блитцен Клаус",
//   "Купидон Форутан",
//   "Виксен Холл",
//   "Дондер Джонкер",
//   "Комета Каравани",
//   "Танцовщица Мур",
//   "Дашер Тоноян",
// ]

let arr = [
  "Dasher Tonoyan",
  "Dancer Moore",
  "Prancer Chua",
  "Vixen Hall",
  "Comet Karavani",
  "Cupid Foroutan",
  "Donder Jonker",
  "Blitzen Claus",
];

function sortReindeer(reindeerNames) {
  return reindeerNames.sort((a, b) => {
    const [, lastNameA] = a.split(" ");
    const [, lastNameB] = b.split(" ");
    return lastNameA.localeCompare(lastNameB);
  });
}

// Test the function with the provided example
const reindeerNames = [
  "Dasher Tonoyan",
  "Dancer Moore",
  "Prancer Chua",
  "Vixen Hall",
  "Comet Karavani",
  "Cupid Foroutan",
  "Donder Jonker",
  "Blitzen Claus",
];

const sortedReindeer = sortReindeer(reindeerNames);
console.log(sortedReindeer);

// Конечно! Вот пошаговое объяснение каждой строки кода в функции:

// function sortReindeer(reindeerNames) {
// Здесь мы объявляем функцию sortReindeer, которая принимает массив с именами северных оленей в качестве аргумента.
// return reindeerNames.sort((a, b) => {
// Мы используем метод sort для сортировки массива reindeerNames, передавая в качестве аргумента функцию сравнения (a, b) => {.
// const [, lastNameA] = a.split(' ');
// Мы разбиваем строку a (имя оленя) по пробелу с помощью split(' ') и деструктурируем массив, чтобы получить только фамилию (второе слово) оленя.
// const [, lastNameB] = b.split(' ');
// То же самое делаем с именем b, чтобы получить фамилию второго оленя.
// return lastNameA.localeCompare(lastNameB);
// Мы сравниваем фамилии оленей (lastNameA и lastNameB) с помощью метода localeCompare, который позволяет установить порядок с учётом локали.
// });
// Закрываем функцию сравнения для метода sort.
// }
// Закрываем функцию sortReindeer.

let arr1 = [
  "Dasher Tonoyan",
  "Dancer Moore",
  "Prancer Chua",
  "Vixen Hall",
  "Comet Karavani",
  "Cupid Foroutan",
  "Donder Jonker",
  "Blitzen Claus",
];

function sortLastNames(n) {
  return n.sort((a, b) => {
    const [, lastNameA] = a.split(" ");
    const [, lastNameB] = b.split(" ");
    return lastNameA.localeCompare(lastNameB);
  });
}

console.log(sortLastNames(arr1));

let c = "a, b";
let d = "d, a";

let c1 = c.split(" ");
let d1 = d.split(" ");

let i = c1.concat(d1);
console.log(i);

// let [result] = c.concat(d);

// console.log(result);

let a = "bac";
let b = "acb";

console.log(a.localeCompare(b));

console.log("Python".localeCompare("JavaScript"));
