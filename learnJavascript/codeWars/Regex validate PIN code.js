// Банкоматы позволяют использовать 4 или 6-значные PIN-коды, и PIN-коды не могут содержать ничего, кроме ровно 4 цифр или ровно 6 цифр. Если функции передана правильная строка PIN-кода, возвращается true, в противном случае возвращается false.

// 1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  let arr = pin.split("");
  if (arr.length !== 4 && arr.length !== 6) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!/^\d$/.test(pin[i])) {
      return false;
    }
  }
  return true;
}

console.log(validatePIN("1234")); // true
console.log(validatePIN("12345")); // false
console.log(validatePIN("123456")); // true
console.log(validatePIN("a234")); // false


function validatePIN (pin) {
    //return true or false
      var n = pin.length;
    if( n != 4 && n != 6)
            return false;
    for (var i in pin)
            if (pin[i] > '9' || pin[i] < '0')
                return false;
    return true;
  }