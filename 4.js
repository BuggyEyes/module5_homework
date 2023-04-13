// Задание 4.
// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandom(0, 100);
getRandomNumber(0, 100);
let Array = [];
for (let i = 0; i <= 100; i++) {
    Array.push(i)
}
let randNumber = Math.floor(Math.random() * Array.length);
console.log((Array[randNumber]));
