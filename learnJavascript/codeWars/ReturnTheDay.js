// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

function whatday(num) {
  const week = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };
  if(num < 1 || num > 7){
    return "Wrong, please enter a number between 1 and 7";
  }
    return week[num]
 
}

console.log(whatday(1))
console.log(whatday(2))
console.log(whatday(3))
console.log(whatday(4))
console.log(whatday(7))
console.log(whatday(8))
console.log(whatday(0))