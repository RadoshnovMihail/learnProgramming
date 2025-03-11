// document.querySelector('#test').onkeypress = function(e){
//     const __isAlpha = /^[A-ZА-ЯЕ]+$/i.test(this.value);
//     if(!__isAlpha){
//         console.log('Введите корректные данные');
//     } else {
//         document.querySelector('#test').addEventListener('input', function (e) {
//             this.value = this.value.toLowerCase();
//         });
//     }

// }
// let left = 0;
// document.keydown = function(e){
//     console.log(e.keydown);
//     let sq = document.querySelector('.sq');
//     if(e.keydown == 68){
//         left = left + 10;
//         sq.style.marginLeft = left + 'px';
//     }
//     if(e.keydown == 65){
//         left = left - 10;
//         sq.style.marginLeft = left + 'px';
//     }
// }
let direction = 0;
document.addEventListener('keydown',function(event){
    console.log(event.code)
    let sq = document.querySelector('.sq');
    if(event.code == 'ArrowRight'){
        direction = direction + 10;
        sq.style.marginLeft = direction + 'px';
    } else if (event.code == 'ArrowLeft'){
        direction = direction - 10;
        sq.style.marginLeft = direction + 'px';
    }
})