function isIsogram(str){
    let result = new Set(str.toLowerCase())
    return result.size === str.length
  }

  console.log(isIsogram("Dermatoglyphics"))// true
  console.log(isIsogram("aba"))//false
  console.log(isIsogram("moOse"))//false