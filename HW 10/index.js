// task-01
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
};

let { first: f, third: x, fifth = 'Name №5' } = names;

console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(fifth); // "Name №5"

// task-02
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};

let { names: [, name2, , name4],
    ages: [, age2, , age4] } = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// task-03
// 1 варіант

function mul(...params) {
    let count = 1;
    let foundNumber = false;

    for (const i of params) {
        if (typeof (params[i]) === 'number') {
            count *= params[i];
            foundNumber = true;
        }
    }
    return foundNumber ? count : 0;;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

// 2 варіант
function mul(...params) {
    const numbers = params.filter(param => typeof param === 'number');
    if (numbers.length === 0) {
        return 0;
    }
    return numbers.reduce((a, b) => a * b);
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

// task-04
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

function mapBuilder(keysArray, valuesArray) {
    if (keysArray.length !== valuesArray.length) {
        throw new Error("The length is different");
    }

    const map = new Map();
    for (let i = 0; i < keysArray.length; i++) {
        map.set(keysArray[i], valuesArray[i]);
    }
    return map;
}

console.log(map.size); // 4
console.log(map.get(2)); // "span"

// task-05
var arr = [];

for (var i = 0; i <= 2; i++) {
    (function (j) {
        arr[j] = function () {
            console.log(j);
        };
    })(i);
}

arr[0](); // 0
arr[arr.length - 1](); // 2
