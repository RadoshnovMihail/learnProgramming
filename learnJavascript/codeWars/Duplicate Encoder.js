// Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке будет "(", если этот символ встречается в исходной строке только один раз, или ")", если этот символ встречается в исходной строке более одного раза. При определении того, является ли символ дубликатом, игнорируйте капитализацию.


// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


function duplicateEncode(word){
   let arr = word.toLowerCase().split('');
   let arrUnique = new Set(arr)
   for( let key of arr){
    let count = 0;
    if(arrUnique[key] === arr[key]){
        count++
    }
    
   }
    return arrUnique;
}

console.log(duplicateEncode("din")) // "((("
console.log(duplicateEncode("recede")) // "()()()"
console.log(duplicateEncode("Success")) // ")())())"
console.log(duplicateEncode("(( @")) // "))((" 