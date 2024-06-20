// Напишите функцию isItLetter или is_it_letter или IsItLetter, которая сообщает нам, является ли данный символ буквой или нет.

let a = '.';

function isItLetter(character) {
    return character.toLowerCase() !== character.toUpperCase();
  
  }

console.log(isItLetter(a));
