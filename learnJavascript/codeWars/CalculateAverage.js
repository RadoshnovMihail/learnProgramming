// Напишите функцию, которая вычисляет среднее значение чисел в заданном списке. Примечание: Пустые массивы должны возвращать 0.

function findAverage(array) {
   let sum = 0;
if(array.length !== 0){
    sum = array.reduce((acc, val) =>acc + val)
} else {
    return 0
}
return sum / array.length
  }

  console.log(findAverage([1,2,3,4]))//2.5
  console.log(findAverage([1,2,3]))//2
  console.log(findAverage([]))//0


  
  var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }