// Создайте функцию reverse для прототипа String, которая позволит выполнять следующие функции:

// "String".reverse();// => returns "gnirtS"
// "Super awesome string".reverse();// => returns "gnirts emosewa repuS"

function reverse (x){
return x.split('').reverse().join('')
}

console.log(reverse("String"))
console.log(rev("gnirts emosewa repuS"))



String.prototype.reverse = function() {
    return this.split('').reverse().join('');
};

console.log("String".reverse()); // => "gnirtS"
console.log("Super awesome string".reverse()); // => "gnirts emosewa repuS"