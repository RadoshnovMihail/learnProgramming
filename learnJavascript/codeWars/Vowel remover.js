
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"


function shortcut (string) {
    return string.replace(/[aeiou]/g,'')
  }

  console.log(shortcut("hello"))
  console.log(shortcut("HELLO"))


  function shortcut (string) {
    return string
      .split('')
      .filter(str => !'aeiou'.includes(str))
      .join('')
  }