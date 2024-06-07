// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"
let str1 = "abcde";
let str2 = "cdefgh";

function mergeStrings(first, second){
    for(let i = 0; i < first.length; i++){
        if(second.startsWith(first.slice(i))){
            return first + second.slice(first.length - i);
        }
    }
    return first + second;
  }

  console.log(mergeStrings(str1,str2));









