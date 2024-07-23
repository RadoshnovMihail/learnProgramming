// С праздником, товарищи воины кода! Старший организатор подарков Санты Эльф разработал способ обозначить до 26 подарков, присвоив каждому из них уникальный алфавитный символ. После того как каждому подарку был присвоен символ, Эльф-организатор подарков соединил символы, чтобы сформировать код заказа подарков. Санта попросил своего организатора упорядочить символы в алфавитном порядке, но Эльф заснул от переизбытка горячего шоколада и леденцов! Напишите функцию sortGiftCode/sort_gift_code/SortGiftCode, которая принимает строку, содержащую до 26 уникальных алфавитных символов, и возвращает строку, содержащую те же символы в алфавитном порядке.

// Примеры (вход -- => выход): "abcdef" -- => "abcdef" "pqksuvy" -- => "kpqsuvy" "zyxwutsrqponmlkjihgfedcba" -- => "abcdefghijklmnopqrstuvwxyz"



// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

function sortGiftCode(code){
  return code.split('').sort().join('')
  }

  console.log(sortGiftCode("pqksuvy")) //"kpqsuvy"


  const sortGiftCode = code => code.split('').sort().join('')

  console.log(sortGiftCode("krishan")) //"kpqsuvy"