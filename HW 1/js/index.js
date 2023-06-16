// task-02
console.log('Milashenko');

// task-03
let firstValue = 2;
let secondValue = 'string';
console.log(`First Value: ${firstValue}, Second Value: ${secondValue}`);

secondValue = firstValue;
console.log(`First Value: ${firstValue}, Second Value: ${secondValue}`);

// task-04
const typeObject = {
    string: 'String',
    number: 4,
    boolean: true,
    undefined: undefined,
    null: null
};

// task-05
let isAdult = confirm('Are you an adult ?');
console.log(isAdult);

// task-06
let myName = 'Yelyzaveta';
let surname = 'Milashenko';
let group = 'JS Fundamentals';
let year = 1998;
let isMarried = true;

console.log(typeof (myName));
console.log(typeof (surname));
console.log(typeof (group));
console.log(typeof (year));
console.log(typeof (isMarried));
console.log(`Number: ${year}, Boolean: ${isMarried}, String: ${myName} ${surname}, ${group}`);

let valueWithNull = null;
let valueWithUndefined;
console.log(`Type Value With Null: ${typeof (valueWithNull)}, Type Value With Undefined: ${typeof (valueWithUndefined)}`);

// task-07
let loginUser = prompt('Enter your login:');
let emailUser = prompt('Enter your email:');
let passwordUser = prompt('Enter your password:');
alert(`Dear ${loginUser}, your email is ${emailUser}, your password is ${passwordUser}`);

// task-08
let secondsInHour;
let secondsInDay;
let secondsInMonth;

function calcSecond() {
    let secondsInMinute = 60;
    let minuteInHoure = 60;
    return secondsInHour = secondsInMinute * minuteInHoure,
        secondsInDay = secondsInHour * 24,
        secondsInMonth = secondsInDay * 31;
}

calcSecond();

console.log(secondsInHour);
console.log(secondsInDay);
console.log(secondsInMonth);
