// Вы пишете код для управления светофорами в вашем городе. Вам нужна функция, которая будет обрабатывать каждый переход от зеленого к желтому, красному, а затем снова к зеленому. Напишите функцию, которая принимает в качестве аргумента строку, представляющую текущее состояние светофора, и возвращает строку, представляющую состояние, в которое должен перейти светофор. Например, когда на входе зеленый, на выходе должен быть желтый.

// green, to yellow, to red

function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
      break;
    case "yellow":
      return "red";
      break;
    case "red":
      return "green";
      break;
  }
}

console.log(updateLight("green"));

assert.strictEqual(updateLight("green"), "yellow");
assert.strictEqual(updateLight("yellow"), "red");
assert.strictEqual(updateLight("red"), "green");


function updateLight(current) {
  
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  
  }