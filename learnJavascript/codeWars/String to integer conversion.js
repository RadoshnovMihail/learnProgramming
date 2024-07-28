// JavaScript предоставляет встроенный метод parseInt. Его можно использовать следующим образом: parseInt("10") возвращает 10 parseInt("10 яблок") также возвращает 10 Мы хотели бы, чтобы во втором случае он возвращал "NaN" (в виде строки), поскольку входная строка не является допустимым числом.

// Вам предлагается написать метод myParseInt со следующими правилами: Он должен выполнять преобразование, если заданная строка содержит только одно целое значение (и, возможно, пробелы - включая табуляцию, перевод строки... - на обоих концах) Для всех остальных строк (включая строки, представляющие значения плавающих величин) он должен возвращать NaN Он должен предполагать, что все числа не подписаны и записаны по основанию 10


// Test.assertEquals(myParseInt("1"), 1);
// Test.assertEquals(myParseInt("  1 "), 1);
// Test.assertEquals(myParseInt("08"), 8);
// Test.expect(isNaN(myParseInt("5 friends")));
// Test.expect(isNaN(myParseInt("16.5")));

function myParseInt(str) {
    str = str.trim();
    const regex = /^\d+$/;
    if (regex.test(str)) {
        return parseInt(str, 10);
    } else {
        return "NaN";
    }
}
  
  console.log(myParseInt("1"))
  console.log(myParseInt("  1 "))
  console.log(myParseInt("08"))
  console.log(myParseInt("5 friends"))
  console.log(myParseInt("16.5"))


  const myParseInt = str => !Number.isInteger(str) ? NaN : +str

  console.log(myParseInt("1"))
  console.log(myParseInt("  1 "))
  console.log(myParseInt("08"))
  console.log(myParseInt("5 friends"))
  console.log(myParseInt("16.5"))
