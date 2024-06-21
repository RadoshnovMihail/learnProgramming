




function hit(l) {
    if (l === 5) {
        return 4;
    } else if (l === 4) {
        return 0;
    } else {
        return 2;
    }
}

// Примеры использования
console.log("Player 5 -> " + hit(5)); // Вывод: Player 5 -> 4
console.log("Another guy 4 -> " + hit(4)); // Вывод: Another guy 4 -> 0