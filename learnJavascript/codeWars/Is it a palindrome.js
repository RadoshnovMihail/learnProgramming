function isPalindrome(x) {
   return x.toLowerCase() === x.split('').reverse().join('').toLowerCase();
  }

  console.log(isPalindrome('madam'))
  console.log(isPalindrome('racecar'))
  console.log(isPalindrome('tree'))