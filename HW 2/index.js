// task-01
const a = +prompt("Enter first number:");
const b = +prompt("Enter second number:");
const c = +prompt("Enter third number:");

if (a < b < c) {
    console.log('True');
} else {
    console.log('False');
};

// task-02
let x = 1;
let y = 2;

let res1 = String(x) + y;
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = `${Boolean(x)}${y}`;
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = Boolean(x + y)
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = undefined + x + y;
console.log(res4); // NaN
console.log(typeof res4); // ""number""

// task-03
const isAdult = +prompt('Скільки Вам років?');

if (isAdult >= 18) {
    alert('Ви досягли повнолітнього віку');
} else {
    alert('Ви ще надто молоді');
};

// task-04
const firstValue = +prompt("Enter first number:");
const secondValue = +prompt("Enter second number:");
const thirdValue = +prompt("Enter third number:");

function areaTriangle() {
    if (typeof (firstValue) === 'number' && typeof (secondValue) === 'number' && typeof (thirdValue) === 'number') {
        const p = (firstValue + secondValue + thirdValue) / 2;
        const area = Math.sqrt(p * (p - firstValue) * (p - secondValue) * (p - thirdValue));
        console.log(area.toFixed(3));
    } else {
        console.log('Incorrect data')
    }
}
areaTriangle();

if (firstValue ** 2 == (secondValue ** 2) + (thirdValue ** 2)) {
    console.log('Трикутник прямокутний');
} else if ((secondValue ** 2) == (firstValue ** 2) + (thirdValue ** 2)) {
    console.log('Трикутник прямокутний');
} else if ((thirdValue ** 2) == (secondValue ** 2) + (firstValue ** 2)) {
    console.log('Трикутник прямокутний');
} else {
    console.log('Трикутник не є прямокутним.');
};

// task-05
let dateNow = new Date().getHours();
console.log(dateNow)

if (5 < dateNow && dateNow <= 11) {
    console.log('Доброго ранку');
} else if (11 < dateNow && dateNow <= 17) {
    console.log('Доброго дня');
} else if (17 < dateNow && dateNow < 23) {
    console.log('Доброго вечора');
} else {
    console.log('Доброї ночі');
}

switch (true) {
    case (5 < dateNow && dateNow <= 11):
        console.log('Доброго ранку');
        break;
    case (11 < dateNow && dateNow <= 17):
        console.log('Доброго дня');
        break;
    case (17 < dateNow && dateNow < 23):
        console.log('Доброї ночі');
        break;
    default:
        console.log('Доброї ночі');
}

// task-06
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]

let data = (array) => {
    return arr.filter((el, id) => arr.indexOf(el) === id);
}

console.log(data(arr));

