// На вход будет подан массив словарей. Значения будут возвращены в виде строкового предложения в порядке целочисленного эквивалента их ключей (по возрастанию). Ключи не повторяются, их диапазон -999 < key < 999. Ключи и значения словарей всегда будут строками и не будут пустыми. Пример Вход: List = [ {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} ] Выход: 'Vatsan took his dog for a spin'

let list = [
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
   ]

//    console.log(list[1][2]);

function sentence(arrayOfObjects) {
  const sortedObjects = arrayOfObjects.sort((a, b) => parseInt(Object.keys(a)[0]) - parseInt(Object.keys(b)[0]));
  const sentenceArray = [];
  for(let obj of sortedObjects){
    const value = Object.values(obj)[0];
    sentenceArray.push(value)
  }
  return sentenceArray.join(' ')
  }

console.log(sentence(list));








let list1 = [
  {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
 ]

 function sentence(arrayOfObjects) {
 const sortedObjects = arrayOfObjects.sort((a, b) => parseInt(Object.keys(a)[0]) - parseInt(Object.keys(b)[0]));
 let arr = [];
 for(obj of sortedObjects){
  const value = Object.values(obj)[0];
  arr.push(value)
 }
    return arr.join(' ');
}

console.log(sentence(list1));



let list2 = [
  {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
 ]

 const a = list2.map(el => Object.values(el)[0]);
 console.log(a)

const sentence = list => list.sort((a, b)=> Object.keys(a)[0] - Object.keys(b)[0]).map((item => Object.values(item)[0])).join(' ');

console.log(sentence(list2))