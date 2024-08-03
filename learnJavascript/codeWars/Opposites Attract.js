function lovefunc(flower1, flower2) {
  let a = flower1 % 2 ^ (flower2 % 2 === 1);
  return a === 1 ? true : false;
}

console.log(lovefunc(1, 4)); //true
console.log(lovefunc(2, 2)); // false


function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  }