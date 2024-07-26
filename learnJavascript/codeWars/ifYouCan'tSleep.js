// Если задано целое неотрицательное число, например 3, верните строку с бормотанием: "1 овца... 2 овцы... 3 овцы...". Входные данные всегда будут действительными, т.е. никаких отрицательных целых чисел.

var countSheep = function (num){
    let count = 1;
    let str = '';
    while(count <= num){
        str += count + ' sheep...'
        count++
    }
    return str
  }

  console.log(countSheep(3))