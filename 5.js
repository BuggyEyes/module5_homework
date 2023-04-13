// Задание 5.
// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

let array = [1,"Hello", true];
console.log(array.length);
array.map(function (item,index,array){
    console.log(item);
});