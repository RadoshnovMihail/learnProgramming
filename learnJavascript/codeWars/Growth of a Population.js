// В небольшом городе население в начале года составляет p0 = 1000 человек. Население регулярно увеличивается на 2 % в год, и кроме того, в город приезжает 50 новых жителей в год. Сколько лет нужно городу, чтобы его население стало больше или равно p = 1200 жителей?

// В конце первого года будет:
// 1000 + 1000 * 0,02 + 50 => 1070 жителей

// В конце второго года будет:
// 1070 + 1070 * 0.02 + 50 => 1141 житель (** количество жителей - целое число **)

// В конце 3-го года будет:
// 1141 + 1141 * 0.02 + 50 => 1213

// На это потребуется целых 3 года.
// Более общие заданные параметры:

// p0, процент, aug (количество жителей, прибывающих или убывающих каждый год), p (численность населения, которая должна быть равна или превышена).

// функция nb_year должна вернуть n количество целых лет, необходимых для того, чтобы численность населения была больше или равна p.

// aug - целое число, percent - положительное или нулевое плавающее число, p0 и p - положительные целые числа (> 0).

// Примеры:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Примечание:
// Не забудьте преобразовать параметр percent в проценты в теле функции: если параметр percent равен 2, то его нужно преобразовать в 0.02.

// Не существует дробного числа людей. В конце каждого года численность населения является целым числом: 252,8 человек, округлим до 252 человек.

function nb_year(p0, percent, aug, p) {
    let years = 0;
    while (p0 < p) {
        p0 += Math.floor(p0 * percent / 100) + aug;
        years++;
    }
    return years;
}

// Примеры использования
console.log(nb_year(1500, 5, 100, 5000)); // Вывод: 15
console.log(nb_year(1500000, 2.5, 10000, 2000000)); // Вывод: 10
console.log(nb_year(1000, 2.0, 50, 1214));


// 1000 + 1000 * 0,02 + 50


function nbYear(p0, percent, aug, p) {

}