// Возьмите 2 строки s1 и s2, содержащие только буквы от a до z. Верните новую отсортированную строку, самую длинную из возможных, содержащую отдельные буквы - каждая из которых взята только один раз - из s1 или s2.

function longest(s1, s2) {
    return (s1 + s2).split('').sort().filter((el, id, ar) => ar.indexOf(el) === id).join('')
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));


const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')