let words = ["dog", "cat", "elephant", "sneak", "rabbit"];

//рандомное слово
const randomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};

// 1. Помещаем рандомное слово в переменную.
//2. Создаем массив с загаданным словом.
//3. Создаем счетчик попыток.
// 4. Создаем переменную содержащую длинну слова.
// 5. Создаем переменную содержащую допустимое количество попыток.
const getSecretWord = function () {
  let word = randomWord(words);
  let findWord = new Array(word.length).fill("-");
  let lengthWord = word.length;
  let attemptCounter = 0; // счетчик попыток
  let totalAttempts = 20; //всего попыток
  return {
    word: word,
    findWord: findWord,
    attemptCounter: attemptCounter,
    lengthWord: lengthWord,
    totalAttempts: totalAttempts,
  };
};
console.log(getSecretWord());

const findLetterUser = function (letter, word, findWord) {
  let condition = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      findWord[i] = letter;
      condition = true;
    }
  }
  return condition;
};

function startGame() {
  alert("Угадайте слово за 20 попыток");
  let parameters = getSecretWord();
  while (parameters.lengthWord > 0 || totalAttempts > 0) {
    let findLetter = prompt(
      "Угадайте букву, или нажмите Отмена для выхода из игры"
    );
    if (findLetter === null) {
      return;
    } else if (findLetter !== 1) {
      alert("Пожалуйста, введите одиночную букву");
    } else {
      let condition = findLetter(
        findLetter,
        parameters.word,
        parameters.findWord
      );
      if (condition) {
        parameters.lengthWord--;
        }
      parameters.totalAttempts--;
      parameters.attemptCounter++;
    }
    if (parameters.lengthWord === 0) {
      alert(
        `Поздравляем вы отгадали слово ${parameters.word} за ${parameters.attemptCounter} попыток`
      );
    }
    if (parameters.totalAttempts === 0) {
      alert(`Ваши попытки закончились, было загадано слово ${parameters.word}`);
    }
  }
}

startGame();
