// Суммирует все числа заданного массива (cq. list), кроме самого высокого и самого низкого элемента (по значению, а не по индексу!). Самый высокий или самый низкий элемент соответственно является единственным элементом на каждом краю, даже если их несколько с одинаковым значением. Проверьте правильность ввода.


function sumArray(array) {
    let max = Math.max(...array);
    let min = Math.min(...array);
    let sum = array.reduce((acc, val) => acc + val);
    return Math.abs(((max + min) - sum))
}

console.log(sumArray([ 6, 2, 1, 8, 10 ])) // 16
console.log(sumArray([ 0, 1, 6, 10, 10 ])) // 17



// console.log([ 0, 1, 6, 10, 10 ].splice(0, 1)) // 17