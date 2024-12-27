// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105


function b (num){
    let a = num.toString().split('');
    let newArr = a.reverse().map(el => Number(el));
    let ind = newArr.findIndex(el => el != 0)
    let res = a.slice(ind).reverse().join('');
return Number(res);
}
b(960000);
b(1050);

console.log(b(960000))
console.log(b(1050))
console.log(b(-1050))