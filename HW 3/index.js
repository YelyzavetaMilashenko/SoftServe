// task-01
let arr = [];

function createArray(start, end) {
    for (let index = start; index <= end; index++) {
        arr.push(index);
    }
}
createArray(2, 9)
console.log(arr)

// task-02
function showNumbers(start, end) {
    let result = [];
    for (let index = start; index <= end; index++) {
        result = result.concat(Array(index - start + 1).fill(index));
    }
    return result.join(',');
}

console.log(showNumbers(2, 4))

// task-03
let array = [];
function randArray(count) {
    if (count === 1) {
        return array.push(Math.floor(Math.random() * 500));
    }
    return (
        array.push(Math.floor(Math.random() * 500)),
        randArray(--count));
}

randArray(4);
console.log(array);

// task-04
const arr3 = [5, 3, 4, 5, 6, 7, 3];

function compact(array) {
    return array.filter((el, id) => array.indexOf(el) === id);
}

const arr2 = compact(arr3);
console.log(arr2);

// task-05
let arrCollect = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];

function groupByType(arr) {
    let typeString = [];
    let typeNumber = [];
    let type = arr.forEach((el) => {
        if (typeof (el) === 'string') {
            typeString.push(el);
        } else if (typeof (el) === 'number') {
            typeNumber.push(el);
        } else if (Array.isArray(el)) {
            el.forEach((el2) => {
                if (typeof (el2) === 'string') {
                    typeString.push(el2);
                } else if (typeof (el2) === 'number') {
                    typeNumber.push(el2);
                }
            })
        }
    }
    )
    return (typeNumber, typeString);
}

console.log(groupByType(arrCollect))

// task-06
function calc(a, b, op) {
    if (op === 1) {
        return a - b;
    } else if (op === 2) {
        return a * b;
    } else if (op === 3) {
        return a / b;
    } else {
        return a + b;
    }
}

console.log(calc(3, 1, 6));

// task-07
function findUnique(arr) {
    if (arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x))) {
        return false;
    } else {
        return true;
    }
}

console.log(findUnique([1, 2, 3, 5, 3]));