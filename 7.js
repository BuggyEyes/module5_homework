// Задание 7.
//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
//Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.

//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.


let arr = [0, 1, 0, 1, 3, 2, 2, 4, '123'];
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;
let otherCount = 0;
for (let i = 0; i < arr.length; i++) {
    if ((typeof (arr[i]) == 'number') && (!isNaN(arr[i]))) {
        if (arr[i] == 0) {
            zeroCount++;
        } else if (arr[i] % 2 === 0) {
            evenCount++;
        } else if (arr[i] % 2 !== 0) {
            oddCount++;
        }
    } else {
        otherCount++;
    }
}
console.log(zeroCount);
console.log(evenCount);
console.log(oddCount);
console.log(otherCount);