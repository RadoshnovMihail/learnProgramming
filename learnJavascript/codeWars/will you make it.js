// Вы отправились в поход с друзьями далеко от дома, но когда пришло время возвращаться, вы поняли, что топливо на исходе, а ближайшая заправка находится в 50 милях! Вы знаете, что в среднем ваш автомобиль расходует около 25 миль на галлон. Осталось 2 галлона.

// Учитывая эти факторы, напишите функцию, которая скажет вам, можно ли добраться до насоса или нет.

// Функция должна возвращать true, если это возможно, и false, если нет.



const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    const distancePossible = mpg * fuelLeft;

    return distancePossible >= distanceToPump;
};

// Test the function
const distanceToPump = 50;
const mpg = 25;
const fuelLeft = 2;

const isPossible = zeroFuel(distanceToPump, mpg, fuelLeft);
console.log(isPossible); // Output: false