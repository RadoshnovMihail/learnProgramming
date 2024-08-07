// Дезоксирибонуклеиновая кислота, ДНК, - это основная молекула-накопитель информации в биологических системах. Она состоит из четырех оснований нуклеиновой кислоты - гуанина ("G"), цитозина ("C"), аденина ("A") и тимина ("T").

// Рибонуклеиновая кислота, РНК, является основной молекулой-мессенджером в клетках. РНК несколько отличается от ДНК по химической структуре и не содержит тимина. В РНК тимин заменен другой нуклеиновой кислотой - урацилом ('U').

// Создайте функцию, которая переводит заданную строку ДНК в РНК.

// Например:

// "GCAT" => "GCAU".
// Входная строка может быть произвольной длины - в частности, она может быть пустой. Все вводимые данные гарантированно являются валидными, т. е. каждая вводимая строка будет состоять только из 'G', 'C', 'A' и/или 'T'.

let a = 'GCAT';
let b = 'TTTT'
function DNAtoRNA(dna) {
   return dna.replace(/T/g,"U");
  }

  console.log(DNAtoRNA(a))
  console.log(DNAtoRNA(b))