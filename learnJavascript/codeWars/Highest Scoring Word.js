// Задав строку слов, вы должны найти слово, набравшее наибольшее количество очков.

// Каждая буква слова набирает очки в соответствии с ее положением в алфавите: a = 1, b = 2, c = 3 и т. д.

// Например, оценка слова abad равна 8 (1 + 2 + 1 + 4).

// Вам нужно вернуть слово, набравшее наибольшее количество баллов, в виде строки.

// Если два слова набрали одинаковое количество баллов, верните слово, которое встречается раньше всех в исходной строке.

// Все буквы будут строчными, а все вводимые данные - валидными.

// assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');

// let str = 'man i need a taxi up to ubud' 
   
// function high(x){
// let arr = x.split(' ');
// return arr
// }

// console.log(high(str));



function highestScoringWord(x) {
    const words = x.split(' ');
    let maxScoreWord = '';
    let maxScore = 0;

    for (const word of words) {
        let wordScore = 0;
        for (let i = 0; i < word.length; i++) {
            wordScore += word.charCodeAt(i) - 96; // 'a' has charCode 97, so subtracting 96 gives the letter's score
        }

        if (wordScore > maxScore || (wordScore === maxScore && x.indexOf(word) < x.indexOf(maxScoreWord))) {
            maxScore = wordScore;
            maxScoreWord = word;
        }
    }

    return maxScoreWord;
}

// Example usage
console.log(highestScoringWord('abad bcd eee')); // Returns 'abad'