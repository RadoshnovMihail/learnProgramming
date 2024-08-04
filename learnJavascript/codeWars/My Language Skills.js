// Вам дан словарь/хэш/объект, содержащий несколько языков и результаты вашего теста по этим языкам. Верните список языков, на которых ваш тестовый балл не менее 60, в порядке убывания баллов. Примечание: баллы всегда будут уникальными (поэтому дублирование значений исключено).


// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []


function myLanguages(results) {
    let list = [];
    let values = Object.values(results).sort((a, b) => b - a).filter(el => el >= 60);
    for(const item of values){
        for(const key in results){
            if(results[key] === item){
                list.push(key)
            }
        }
    }
    return list;
}

console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65})) // ["Ruby", "Python"]
console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71})) // ["Dutch", "Greek", "Hindi"]
console.log(myLanguages({"C++": 50, "ASM": 10, "Haskell": 20})) // []


const myLanguages = results => Object.keys(results).filter(el => results[el] >= 60).sort((a, b) => results[b] - results[a]);

console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65})) // ["Ruby", "Python"]
console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71})) // ["Dutch", "Greek", "Hindi"]
console.log(myLanguages({"C++": 50, "ASM": 10, "Haskell": 20})) // []
