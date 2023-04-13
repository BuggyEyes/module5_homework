
//Задание 8
let map = new Map();
map.set("Yolo", "string");
map.set(2, "number");
map.set(true, "boolean");


for (let key of map.keys()) {
    console.log(key);
}

for (let elem of map) {
    console.log(elem);
}


