// Все животные устраивают пир! Каждое животное приносит с собой одно блюдо. Есть только одно правило: блюдо должно начинаться и заканчиваться теми же буквами, что и имя животного. Например, большая голубая цапля принесет чесночный наан, а трусишка - шоколадный торт. Напишите функцию feast, которая принимает имя животного и блюдо в качестве аргументов и возвращает true или false, чтобы указать, разрешено ли зверю принести блюдо на пир. Предположим, что beast и dish - всегда строчные строки, и в каждой из них не менее двух букв. beast и dish могут содержать дефисы и пробелы, но они не будут появляться в начале или конце строки. В них не будет числительных.

function feast(beast, dish) {
    if(beast.charAt(0) === dish.charAt(0)){
        if(beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)){
            return true
        }
    }
    return false
}

console.log(feast("great blue heron", "garlic naan")); //true
console.log(feast("chickadee", "chocolate cake")); //true
console.log(feast("brown bear", "bear claw")); //false


function feast(beast, dish) {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}