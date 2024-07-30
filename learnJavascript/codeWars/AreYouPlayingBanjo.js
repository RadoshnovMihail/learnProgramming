// ; Создайте функцию, которая отвечает на вопрос "Играете ли вы на банджо?". Если ваше имя начинается с буквы "R" или строчной буквы "r", то вы играете на банджо! Функция принимает имя как единственный аргумент и возвращает одну из следующих строк: name + " играет на банджо" name + " не играет на банджо".


// ; name + " plays banjo" 
// ; name + " does not play banjo"

function areYouPlayingBanjo(name) {
  return !name.toLowerCase().indexOf('r') ? `${name} plays banjo` : `${name} does not play banjo`
}

console.log(areYouPlayingBanjo('Ringo'))
console.log(areYouPlayingBanjo('Adam'))
console.log(areYouPlayingBanjo('rolf'))