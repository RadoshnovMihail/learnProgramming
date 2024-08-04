function isPangram(string) {
  let letters = new Set();
  let str = string.toLowerCase();
  for (let el of str) {
    if (el >= "a" && el <= "z") {
      letters.add(el);
    }
  }
  return letters.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));


function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }