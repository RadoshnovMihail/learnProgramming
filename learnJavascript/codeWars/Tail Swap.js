// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// [ [ 'abc', '123' ], [ 'cde', '456' ] ]
function tailSwap(arr) {
  const [left1, right1] = arr[0].split(":");
  const [left2, right2] = arr[1].split(":");
  const result = [`${left1}:${right2}`, `${left2}:${right1}`];
  return result;
}

//   return `${str[0][0]} : ${str[1][1]}, ${str[1][0]} : ${str[0][1]}`.split('":"')

console.log(tailSwap(["abc:123", "cde:456"]));

// for (let i = 0; i < a.length; i ++) {
//   console.log(a[i].indexOf(':'));
// }

for (let item of a) {
  console.log(item.indexOf(":"));
}

let = ["abc:123", "cde:456"];

function tailSwap(arr) {
  const result = arr.map((item) => {
    const [left, right] = item.split(":");
    return;
  });

  return result;
}

// Test cases
console.log(tailSwap(["abc:123", "cde:456"])); // Output: ["abc:456", "cde:123"]
console.log(tailSwap(["a:12345", "777:xyz"])); // Output: ["a:xyz", "777:12345"]

function tailSwap(arr) {
  let str = arr.map((elem) => {
    const [a, b] = elem.split(":");
    return;
  });

  return;
}

function tailSwap(arr) {
  let newArr = arr.map((string) => string.split(":"));
  return [newArr[0][0] + ":" + newArr[1][1], newArr[1][0] + ":" + newArr[0][1]];
}

function a(arr) {
  const [[a, b], [c, d]] = arr.map((el) => el.split(":"));
  return [`${a}:${d}`, `${c}:${b}`];
}

console.log(a(["abc:123", "cde:456"]));

