// Стиву и Джошу скучно, и они хотят во что-нибудь поиграть. Они не хотят много думать, поэтому придумали очень простую игру. Напишите функцию winner и выясните, кто победит.

// Они сдают одинаковое количество карт. Они оба переворачивают карту на вершине своей колоды. У кого карта с большей стоимостью, тот выигрывает раунд и получает одно очко (если карты одинаковой стоимости, то ни один из них не получает очко). После этого обе карты сбрасываются, и игроки переворачивают еще одну карту из верхней части своей колоды. Так они делают до тех пор, пока у них не останется карт.

// deckSteve и deckJosh - это массивы, представляющие их колоды. Они заполнены картами, представленными одним символом. Ранг карт следующий (от низшего к высшему):

// '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'.
// Каждая карта может появляться в колоде более одного раза. Выясните, кто победит, и верните того, кто победил и с каким счетом:

// "Стив выиграл от x до y", если выиграл Стив; где x - счет Стива, y - счет Джоша;
// "Josh wins x to y", если победил Джош; где x - счет Джоша, y - счет Стива;
// "Ничья", если в конце игры счет равный.
// Пример
// Стиву сдаются: ['A','7','8']
// Джош сдает: ['K','5','9']
// В первом раунде туз бьет короля, и Стив получает одно очко.
// Во втором раунде 7 бьет 5, и Стив получает второе очко.
// В третьем раунде 9 бьет 8, и Джош получает одно очко.
// Таким образом, вы должны вернуть: "Стив выигрывает 2:1".

// '2','3','4','5','6','7','8','9','T','J','Q','K','A'
// ["K","2","4","5","4","3","2","K","A","T"],["Q","3","4","6","4","3","5","A","8","7"]]
// expected 'Josh wins 3 to 4' to equal 'Josh wins 4 to 3'
// const cardsSteve = ["A", "7", "8"];
// const cardsJosh = ["K", "5", "9"];
// const cardsSteve = ["K", "2", "4", "5", "4", "3", "2", "K", "A", "T"];
// const cardsJosh = ["Q", "3", "4", "6", "4", "3", "5", "A", "8", "7"];

function winner(deckSteve, deckJosh) {
  const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
    "A",
  ];
  let resSteve = 0;
  let resJosh = 0;

  while (deckSteve.length > 0 && deckJosh.length > 0) {
    let cardSteve = deckSteve.shift();
    let cardJosh = deckJosh.shift();

    let rankCardSteve = cards.indexOf(cardSteve);
    let rankCardJosh = cards.indexOf(cardJosh);

    if (rankCardSteve > rankCardJosh) {
      resSteve++;
    } else if (rankCardSteve < rankCardJosh) {
      resJosh++;
    }
  }
  if (resSteve > resJosh) {
    return `Steve wins ${resSteve} to ${resJosh}`;
  } else if (resSteve < resJosh) {
    return `Josh wins ${resSteve} to ${resJosh}`;
  } else {
    return "Tie";
  }
}

console.log(winner(cardsSteve, cardsJosh));




const cardsSteve = ["K", "2", "4", "5", "4", "3", "2", "K", "A", "T"];
const cardsJosh = ["Q", "3", "4", "6", "4", "3", "5", "A", "8", "7"];

function winner(deckSteve, deckJosh) {
  const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
    "A",
  ];

  let resSteve = 0;
  let resJosh = 0;
  let minCardsLeft = Math.min(deckSteve.length, deckJosh.length);

  for (let i = 0; i < minCardsLeft; i++) {
    let cardSteve = deckSteve[i];
    let cardJosh = deckJosh[i];

    let rankCardSteve = cards.indexOf(cardSteve);
    let rankCardJosh = cards.indexOf(cardJosh);

    if (rankCardSteve > rankCardJosh) {
      resSteve++;
    } else if (rankCardSteve < rankCardJosh) {
      resJosh++;
    }
  }

  if (resSteve > resJosh) {
    return `Steve wins ${resSteve} to ${resJosh}`;
  } else if (resSteve < resJosh) {
    return `Josh wins ${resJosh} to ${resSteve}`;
  } else {
    return "Tie";
  }
}

console.log(winner(cardsSteve, cardsJosh));
