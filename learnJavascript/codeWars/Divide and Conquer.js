// Задав смешанный массив числовых и строковых представлений целых чисел, сложите нестроковые целые числа и вычтите сумму строковых целых чисел.

// Верните в виде числа.
// ([9, 3, '7', '3']), 2);

let arr = [9, 3, "7", "3"];

function divCon(x) {
  let num = 0;
  let str = 0;
  x.forEach((element) => {
    typeof element === "number" ? (num += element) : (str += Number(element));
  });
  return num - str;
}

console.log(divCon(arr));
