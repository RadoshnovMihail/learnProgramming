// Треугольник называется равносторонним, если его площадь равна периметру. Верните true, если треугольник равносторонний, иначе верните false. Вам будет предоставлена длина сторон треугольника. Счастливого кодирования!


function equableTriangle(a, b, c) {
    const perimeter = a + b + c;
    const halfPerimeter = perimeter / 2;
    const area = Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));

    return area === perimeter;
}