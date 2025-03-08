let userNum = document.querySelector('#user-num');
document.querySelector('#btn').onclick = checkNum;
let randomNum = Math.round(Math.random() * 2);
console.log(randomNum);

function checkNum(){
    let num = userNum.value;
    num = parseInt(num);
    console.log(num);
    if(!isNaN(num)){
       if(num === randomNum){
        alert('Вы угадали!!!');
        location.reload();
       } else {
        alert('Пробуй еще!')
        location.reload();
       }
    }else{
        alert('Введите коректное число');
        location.reload();
    }
}
