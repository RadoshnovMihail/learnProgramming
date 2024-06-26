// История
// Медведь-фрилансер берет с клиентов почасовую оплату, но он регулирует свою ставку в зависимости от того, насколько близкие друзья у него с клиентами. Для близких друзей он берет $25 в час, для других друзей - $50, для знакомых - $100, а для всех остальных клиентов - $125.

// Вход
// Вы получите список списков, представляющих все задания, выполненные фрилансером Bear за месяц. Каждый массив внутри внешнего списка состоит из количества отработанных часов и близости к клиенту в виде строки, возможные значения: "Близкий друг", "Друг", "Знакомый" или любая другая строка для остальных его клиентов. Распознавание этих трех строк ("Близкий друг", "Друг" и "Знакомый") не должно зависеть от регистра.

// Пример

// [[10, "Близкий друг"], [3, "Знакомый"], [7, "Лид с сайта"], [6, "Друг"], [2, "Из рекламы"]].
// В этом примере он будет оплачивать 10 часов по $25, 3 часа по $100, 7 часов по $125, 6 часов по $50 и 2 часа по $125, итого $1975.

// Ожидаемый результат
// Общая сумма долларов, которую фрилансер выставил за свою работу. В случае пустого массива возвращается 0.

// Пример
1725;
// 1975
let obj = {
  "Close Friend": 25,
  Friend: 50,
  Acquaintance: 100,
};

let arr = [
  [10, "Close Friend"],
  [3, "Acquaintance"],
  [7, "Lead from web"],
  [6, "Friend"],
  [2, "From advertisements"],
];

function bearDollars(arr) {
  let sum = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === "Close Friend") {
      sum += arr[i][0] * 25;
    } else if (arr[i][1] === "Friend") {
      sum += arr[i][0] * 50;
    } else if (arr[i][1] === "Acquaintance") {
      sum += arr[i][0] * 100;
    } else {
      sum += arr[i][0] * 125;
    }
  }
  return sum;
}

console.log(bearDollars(arr));

function calculateInvoice(jobs) {
  const rates = {
    "close friend": 25,
    friend: 50,
    acquaintance: 100,
  };
  let totalInvoice = 0;

  for (const job of jobs) {
    const hours = job[0];
    console.log(hours);
    const proximity = job[1].toLowerCase();
    console.log(proximity);
    if (proximity in rates) {
      totalInvoice += hours * rates[proximity];
    } else {
      totalInvoice += hours * 125; // Default rate for other clients
    }
  }

  return totalInvoice;
}

// Example
const jobs = [
  [10, "Close Friend"],
  [3, "Acquaintance"],
  [7, "Lead from web"],
  [6, "Friend"],
  [2, "From advertisements"],
];
const totalAmountInvoiced = calculateInvoice(jobs);

console.log(totalAmountInvoiced); // Outputs: 1975

// Конечно, вот объяснение каждой строчки кода из предложенного JavaScript кода:

// 1. `function calculateInvoice(jobs) {`: Эта строка объявляет функцию `calculateInvoice`, которая принимает список заданий `jobs` в качестве аргумента.

// 2. `const rates = { 'close friend': 25, 'friend': 50, 'acquaintance': 100 };`: Здесь создается объект `rates`, который содержит тарифы для различных категорий клиентов - близкий друг, друг и знакомый.

// 3. `let totalInvoice = 0;`: Эта строка объявляет переменную `totalInvoice` и устанавливает ее значение в 0. В этой переменной будет накапливаться общая сумма выставленного счета.

// 4. `for (const job of jobs) {`: Начинается цикл `for`, который перебирает все задания из списка `jobs`.

// 5. `const hours = job[0];`: Эта строка извлекает количество отработанных часов из каждого задания и сохраняет его в переменной `hours`.

// 6. `const proximity = job[1].toLowerCase();`: Здесь извлекается степень близости к клиенту из каждого задания и приводится к нижнему регистру с помощью метода `toLowerCase()`. Результат сохраняется в переменной `proximity`.

// 7. `if (proximity in rates) {`: Эта строка проверяет, содержится ли значение `proximity` в объекте `rates`.

// 8. `totalInvoice += hours * rates[proximity];`: Если условие в предыдущей строке истинно, то к общей сумме выставленного счета прибавляется произведение количества часов на тариф для соответствующей категории клиента.

// 9. `} else {`: Если значение `proximity` отсутствует в объекте `rates`, код выполнится здесь.

// 10. `totalInvoice += hours * 125; // Default rate for other clients`: В этой строке к общей сумме выставленного счета прибавляется произведение количества часов на стандартный тариф для других клиентов (125 долларов в час).

// 11. `return totalInvoice;`: Эта строка возвращает общую сумму выставленного счета после завершения цикла и обработки всех заданий.

// Данный код реализует логику расчета общей суммы выставленного счета для заданных заданий с учетом тарифов, зависящих от степени близости к клиенту.

let machines = ["car", "bicycle", "motorcycle"]; // значение

for (let machine of machines) {
  console.log(machine);
}

for (let index in machines) {
  // ключ
  console.log(index);
}

const rates = {
  "close friend": 25,
  friend: 50,
  acquaintance: 100,
};

// for (let key in rates){
//   console.log(rates[key]);
// }

for (let item of rates) {
  console.log(item[1]);
}

let arr1 = [
  [10, "Close Friend"],
  [3, "Acquaintance"],
  [7, "Lead from web"],
  [6, "Friend"],
  [2, "From advertisements"],
];

let arr2 = [];

function sumOfBear(arr) {
  const rates = {
    "close friend": 25,
    friend: 50,
    acquaintance: 100,
  };
  let result = 0;
  

  for (item of arr) {
    let hours = item[0];
    let status = item[1].toLowerCase();

    if (status in rates) {
      result += hours * rates[status];
    } else {
      result += hours * 125;
    }
  }
  return result;
}

console.log(sumOfBear(arr1));
console.log(sumOfBear(arr2))
