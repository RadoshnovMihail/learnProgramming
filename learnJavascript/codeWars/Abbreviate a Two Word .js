function abbrevName(name){
const [firstName, lastName] = name.split(' ')
let result = `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
return result
}

console.log(abbrevName("Sam Harris"));


