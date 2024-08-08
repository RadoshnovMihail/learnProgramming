// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)

function points(games) {
  let count = 0;
  for (let key of games) {
    if (key[0] > key[key.length - 1]) {
      count += 3;
    } else if (key[0] === key[key.length - 1]) {
      count += 1;
    }
  }
  return count
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
); // 30
