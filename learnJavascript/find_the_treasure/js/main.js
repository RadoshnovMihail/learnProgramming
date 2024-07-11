const map = document.getElementById('map');
const message = document.getElementById('message');
const mapRect = map.getBoundingClientRect();
const treasureX = Math.floor(Math.random() * mapRect.width);
const treasureY = Math.floor(Math.random() * mapRect.height);
let steps = 0;

map.addEventListener('click', function(event) {
    const clickX = event.clientX - mapRect.left;
    const clickY = event.clientY - mapRect.top;

    const distance = Math.sqrt((clickX - treasureX) ** 2 + (clickY - treasureY) ** 2);
    steps++;

    if (distance < 20) {
        message.textContent = 'Поздравляем! Найден клад! Количество кликов: ' + steps;
    } else if (distance < 100) {
        message.textContent = 'Горячо!';
    } else {
        message.textContent = 'Холодно!';
    }
});





