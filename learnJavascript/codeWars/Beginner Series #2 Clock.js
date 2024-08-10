function past(h, m, s) {
  let result = 0;
  if (h !== 0) {
    result += 3600000 * h;
  }
  if (m !== 0) {
    result += 60000 * m;
  }
  if (s !== 0) {
    result += 1000 * s;
  }
  return result;
}

console.log(past(1, 1, 1)); // 3661000
console.log(past(1, 0, 1)); // 3601000
