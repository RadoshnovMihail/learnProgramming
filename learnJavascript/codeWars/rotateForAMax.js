// Возьмите число: 56789. Поверните влево, получите 67895. Сохраните первую цифру на месте и поверните влево остальные цифры: 68957. Сохраните первые две цифры на месте и поверните остальные: 68579. Сохраните первые три цифры и поверните влево остальные: 68597. Теперь все кончено, так как, сохранив первые четыре, остается только одна цифра, которая поворачивается сама. У вас есть следующая последовательность чисел: 56789 -> 67895 -> 68957 -> 68579 -> 68597, и вы должны вернуть наибольшее: 68957. Задача Напишите функцию max_rot(n), которая при положительном целом n возвращает максимальное число, которое вы получили, выполнив вращение, аналогичное приведенному выше примеру. Таким образом, max_rot (или maxRot или ... в зависимости от языка) выглядит так: max_rot(56789) должен вернуть 68957 max_rot(38458215) должен вернуть 85821534

// testing(maxRot(38458215), 85821534);
//     testing(maxRot(195881031), 988103115);
//     testing(maxRot(896219342), 962193428);
//     testing(maxRot(69418307), 94183076);

function maxRot(n) {
  // your code
}

console.log(maxRot(38458215)); // 85821534
console.log(maxRot(195881031)); //988103115
console.log(maxRot(896219342)); //962193428
console.log(maxRot(69418307)); //94183076



56789 67895 89567 