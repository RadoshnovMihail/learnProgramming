let words = [
  "диппер",
  "мэйбл",
  "стэн",
  "вэнди",
  "макгакет",
  "гидеон",
  "пухля",
  "гренда",
  "кэнди",
];
let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

let remainingLetters = word.length;

while (remainingLetters > 0) {
  alert(answerArray.join(" "));
  let guess = prompt("Угадай букву или нажми Отмена для выхода из игры.");
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введи только одну букву.");
  } else {
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);
