let a = "The word 'coffee' should be in all-caps.";
let b = "COFFEE COFFEE coFFEE!";
function coffee(str) {
  let pattern = /coffee/gi;
  let result = str.replace(pattern, "COFFEE");
  return result;
}

console.log(coffee(a));
console.log(coffee(b));

// let pattern = /coffee/g;
// let arr = str.split(" ").map((el) => el.toLowerCase());
// let result = arr.join(" ").replace(pattern, "COFFEE");
// return result;


function coffee(str) {
    return str.replace(/coffee/ig, "COFFEE");
  }