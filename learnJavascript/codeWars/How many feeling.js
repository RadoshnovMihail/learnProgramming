// У вас есть два аргумента: string - строка случайных букв (только строчные) и array - массив строк (чувств). Ваша задача - вернуть количество конкретных чувств в массиве.

// Например:

// string -> 'yliausoenvjw'
// array -> ['гнев', 'благоговение', 'радость', 'любовь', 'печаль'].
// output -> '3 чувства.' // 'awe', 'joy', 'love'

// string -> 'griefgriefgrief'
// array -> ['anger', 'awe', 'joy', 'love', 'grief'].
// output -> '1 чувство'. // 'grief'

// string -> 'abcdkasdfvkadf'
// array -> ['желание', 'радость', 'стыд', 'тоска', 'страх'].
// output -> '0 чувств'.
// Если чувство может быть сформировано один раз - плюс один к ответу.

// Если чувство может быть образовано несколько раз из разных букв - плюс один к ответу.

// Каждая буква в строке участвует в формировании всех чувств. 'angerw' -> 2 чувства: 'гнев' и 'благоговение'.

// let str = 'yliausoenvjw';
// let feeling = ['anger', 'awe', 'joy', 'love', 'grief']; // output -> '3 feelings.' // 'awe', 'joy', 'love'

// function countFeelings(string, array) {
//     let sumFeeling =0;
//     let startWord = '';
//     array.array.forEach(elem => {
//         startWord = elem
//     });
//     return startWord
//   }

console.log(countFeelings(str, feeling));

let str = "yliausoenvjw";
let feeling = ["anger", "awe", "joy", "love", "grief"];

function countFeelings(string, array) {
  let count = 0;
  const uniqueFeelings = new Set();

  for (let feeling of array) {
    const feelingChars = feeling.split("");
    let found = true;
    for (let char of feelingChars) {
      if (!string.includes(char)) {
        found = false;
        break;
      }
    }
    if (found) {
      count++;
      uniqueFeelings.add(feeling);
    }
  }

  if (count === 1) {
    return `${count} чувство. // '${[...uniqueFeelings][0]}'`;
  } else {
    return `${count} чувства. // '${[...uniqueFeelings].join("', '")}'`;
  }
}

console.log(countFeelings(str, feeling));

// // Примеры использования:
// console.log(countFeelings('yliausoenvjw', ['гнев', 'благоговение', 'радость', 'любовь', 'печаль']));
// console.log(countFeelings('griefgriefgrief', ['anger', 'awe', 'joy', 'love', 'grief']));
// console.log(countFeelings('abcdkasdfvkadf', ['желание', 'радость', 'стыд', 'тоска', 'страх']));

// let feeling1 = ['anger', 'awe', 'joy', 'love', 'grief'];
// for(let feeling of feeling1){
// const str = feeling.split('')
// console.log(str)
// }

let str1 = "yliausoenvjw";
let feeling1 = ["anger", "awe", "joy", "love", "grief"];
function letGo(a, b) {
  const uniqueFeelings = new Set();
  let count = 0;
  b.forEach((elem) => {
    let marker = true;
    const getLetterArr = elem.split("").filter((value) => {
      if (!a.includes(value)) {
        return (marker = false);
      }
    });
    if (marker) {
      count++;
      uniqueFeelings.add(elem);
    }
    // console.log(getLetterArr)
  });
  if (count === 1) {
    return `${count} чувство. // '${[...uniqueFeelings][0]}'`;
  } else {
    return `${count} чувства. // '${[...uniqueFeelings]}`;
  }
}

console.log(letGo(str1, feeling1));

let a = new Set();
a.add(1);
a.add(2);
a.add("Hello");
a.add("1");
// a.clear()
// a.delete("Hello")
// console.log(a.has(2))

for (let item of a) {
  console.log(item);
}

let arr = [1, 2, 3, 1, 4, 5, "hello", 5, 1, 3];

let b = new Set(arr);
console.log();

let str2 = "yliausoenvjw";
let feeling2 = ["anger", "awe", "joy", "love", "grief"];

function countFeelings(string, array) {
  const uniqueFeelings = new Set();
  count = 0;
  for (let item of array) {
    const getLetterArr = item.split("");
    pointer = true;
    for (let value of getLetterArr) {
      if (!string.includes(value)) {
        pointer = false;
        break;
      }
    }
    if (pointer) {
      count++;
      uniqueFeelings.add(item);
    }
  }
  if (count === 1) {
    return count + " feeling.";
  } else {
    return count + " feelings.";
  }
}

console.log(countFeelings(str2, feeling2));


function countFeelings(string, array) {
  var result=array.filter(x=>x.split("").every(y=>string.includes(y))).length;
  return result===1?"1 feeling.":result+" feelings.";
}


function countFeelings(string, array) {
  let count = 0;
  
  array.forEach((item) => {
      if (item.split('').every((i) => {
          return string.includes(i); 
      })) {
        count++;
      }
  });
  
  
  return count == 1 ? `${count} feeling.` : `${count} feelings.`; 
}