// Напишите функцию, которая принимает строку string[] и возвращает строку string[], переупорядочивая переданный случайный список в заданном Сантой порядке. Длина выходного массива будет равна длине входного. Отсортированный список должен быть расположен в алфавитном порядке по именам.

// input:        "Sarah", "Charlie", "Mo"
// santa sorted: "Charlie", "Mo", "Sarah"

// Examples:

// input:        "Sarah", "Charlie", "Mo"
// santa sorted: "Charlie", "Mo", "Sarah"

// input:        "Sarah", "Sarah", "Charlie", "Charlie", "Charlie", "Mo", "Mo"
// santa sorted: "Charlie", "Mo", "Sarah", "Charlie", "Mo", "Sarah", "Charlie"

function santaSort(unsortedNames) {
  let result = unsortedNames.slice().sort((a, b) => a.localeCompare(b));
  let arr = [];
  for (let i = 0; i < unsortedNames.length; i++) {
    for (let j = 0; j < unsortedNames.length; j++) {
      if()
    }
  }

  return result;
}

console.log(santaSort(["Sarah", "Charlie", "Mo"]));
console.log(santaSort(["Sarah", "Sarah", "Charlie", "Charlie", "Charlie", "Mo", "Mo"]));

function santaSort(unsortedNames) {
  let result = unsortedNames.slice().sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
  });
  return result;
}

console.log(santaSort(["Sarah", "Charlie", "Mo"]));

const santaSort = (unsortedNames) =>
  unsortedNames.slice().sort((a, b) => a.localeCompare(b));

console.log(
  santaSort(["Sarah", "Sarah", "Charlie", "Charlie", "Charlie", "Mo", "Mo"])
);
console.log(santaSort(["Sarah", "Charlie", "Mo"]));



function santaSort(unsortedNames) {
  // Шаг 1: Сортируем уникальные имена по алфавиту
  const uniqueNames = [...new Set(unsortedNames)].sort();

  // Шаг 2: Создаем карту для подсчета вхождений каждого имени
  const nameCounts = new Map();
  for (const name of unsortedNames) {
    nameCounts.set(name, (nameCounts.get(name) || 0) + 1);
  }

  // Массив для хранения отсортированного результата
  const result = [];
  let remaining = unsortedNames.length;

  // Шаг 3: Распределение в круговом порядке
  while (remaining > 0) {
    // Проходим по каждому уникальному имени в алфавитном порядке
    for (const name of uniqueNames) {
      if (nameCounts.get(name) > 0) {
        // Добавляем имя в результат и уменьшаем счетчик
        result.push(name);
        nameCounts.set(name, nameCounts.get(name) - 1);
        remaining--;
      }
    }
  }

  return result;
}
