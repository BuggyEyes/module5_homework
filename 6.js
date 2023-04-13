let arr = [3, 6, 7, 2];

function checkArr1(arr) {
    return arr.every((e, i, a) => typeof e === typeof a[0]);
}

console.log(checkArr1([3, 6, 7, 3]));


function areSame(arr) {
    let first = arr[0];
    for (let i = 1; i < arr.length; i++)
        if (arr[i] != first)
            return false;
    return true;
}


if (areSame(arr)) {
    console.log(("Одинаковы"));
} else
    console.log(("Не одинаковы"));

