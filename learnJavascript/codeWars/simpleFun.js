// Выясните, все ли буквы "g" в данной строке счастливы. Пример Для str = "gg0gg3gg0gg" вывод должен быть true. Для str = "gog" вывод должен быть false. Вход/выход [input] string str Случайная строка из строчных букв, цифр и пробелов. [output] булево значение true, если все буквы "g" счастливы, false в противном случае.

function gHappy(str) {
  let chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "g") {
      const left = i > 0 ? chars[i - 1] : "";
      const right = i < chars.length - 1 ? chars[i + 1] : "";

      if (left !== "g" && right !== "g") {
        return false;
      }
    }
  }
  return true;
}

console.log(gHappy("gg0gg3gg0gg"));
console.log(gHappy("gog"));


const gHappy = str => !/([^g]|^)g([^g]|$)/.test(str)