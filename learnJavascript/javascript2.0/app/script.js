document.querySelector('#test').onkeypress = function(e){
    const __isAlpha = /^[A-ZА-ЯЕ]+$/i.test(this.value);
    if(!__isAlpha){
        console.log('Введите корректные данные');
    } else {
        document.querySelector('#test').addEventListener('input', function (e) {
            this.value = this.value.toLowerCase();
        });
    }

}