function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
  }
}

console.log(basicOp("+", 4, 7));



function reverse(string){
    return string.split(' ').reverse().join(' ')
  }

console.log(reverse('I am an expert at this'))


  'I am an expert at this', 'this at expert an am I';

  

  String.prototype.toJadenCase = function () {
    return this.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && currentDate === expirationDate ? true : false
     
   }

   console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))


   