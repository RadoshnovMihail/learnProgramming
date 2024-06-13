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
  "зусс",
  "бабулита",
  "пасифика",
  "дэрил",
];

// Выбор случайного слова из списка
const pickWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};

const setupAnswerArray = function () {
  let wordToGuess = pickWord(words);
  let answerArray = new Array(wordToGuess.length).fill("-");
  let remainingLetters = wordToGuess.length;
  let attempts = 0;
  return {
    wordToGuess: wordToGuess,
    answerArray: answerArray,
    remainingLetters: remainingLetters,
    attempts: attempts,
  };
};

// Обновление состояния игры после догадки пользователя
const updateGameState = function (guess, word, answerArray) {
  let correctGuess = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === guess) {
      answerArray[i] = guess;
      correctGuess = true;
    }
  }
  return correctGuess;
};

// Основная функция игры
function startGame() {
  let game = setupAnswerArray();
  alert("Добро пожаловать в игру 'Угадай слово'!");

  while (game.remainingLetters > 0) {
    alert("Отгаданное слово: " + game.answerArray.join(" "));
    let userGuess = prompt(
      "Введите букву или нажмите 'Отмена' для выхода из игры."
    );

    if (userGuess == null) {
      alert("Игра окончена. До новых встреч!");
      return;
    } else if (userGuess.length !== 1) {
      alert("Пожалуйста, введите только одну букву.");
    } else {
      let correctGuess = updateGameState(
        userGuess,
        game.wordToGuess,
        game.answerArray
      );
      if (correctGuess) {
        game.remainingLetters--;
      }
      game.attempts++;
    }
  if (game.remainingLetters === 0) {
    alert(
      "Поздравляем! Вы угадали слово '" +
        game.wordToGuess +
        "' за " +
        game.attempts +
        " попыток."
    );
  }
  }
}
startGame();

// let word = words[Math.floor(Math.random() * words.length)];
// let pickRandomWord = function (words){
//   return words[Math.floor(Math.random() * words.length)];
// };

// pickRandomWord(randomWord);

// let answerArray = [];
// for (let i = 0; i < word.length; i++) {
//   answerArray[i] = "_";
// }

// let remainingLetters = word.length;
// let count = 10;

// while (remainingLetters > 0) {
//   alert(answerArray.join(" "));
//   let guess = prompt("Угадай букву или нажми Отмена для выхода из игры.");
//   if (guess === null) {
//     break;
//   } else if (guess.length !== 1) {
//     alert("Пожалуйста, введи только одну букву.");
//   } else {
//     for (let j = 0; j < word.length; j++) {
//       if (word[j] === guess.toLowerCase()) {
//         answerArray[j] = guess.toLowerCase();
//         remainingLetters--;
//       }
//     }
//   }
//   if (count > 0) {
//     alert(`попыток осталось ${count}`);
//     count--;
//   } else {
//     break;
//   }
// }
// alert(answerArray.join(" "));
// alert("Отлично! Было загадано имя " + word);
