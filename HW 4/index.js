// task-01
function sumSliceArray(arr, first, second) {
    if (arr.length === 0)
        throw new Error('Array is empty.');

    if (first < 0 || first >= arr.length || second < 0 || second >= arr.length)
        throw new RangeError('Input index is out of range.');

    if (typeof (first) != 'number' || typeof (second) != 'number')
        throw new TypeError('Type index is incorect');

    let sum = arr[first] + arr[second];
    return sum;
}

let numbers = [1, 2, 3, 4, 5];
try {
    sumSliceArray(numbers, 1, 2);
} catch (err) {
    console.log(err.message);
} finally {
    console.log(numbers)
}

// task-02
function checkAge() {
    let userName = prompt('Enter your name:');
    let userAge = prompt('Enter your age:');
    let userStatus = prompt('Enter your status(admin/moderator/user):');

    if (!userName || !userAge || !userStatus)
        throw new Error('The field is empty! Please enter your age.');

    if (userAge < 18 || userAge > 70)
        throw new RangeError('Invalid age');

    if (userStatus.toLowerCase() !== 'admin' && userStatus.toLowerCase() !== 'moderator' && userStatus.toLowerCase() !== 'user')
        throw new EvalError('Status is incorect');

    if (isNaN(userAge))
        throw new TypeError('Type is age incorect');

    alert('You have been granted access to watch the movie');
}

try {
    checkAge();
} catch (err) {
    console.log(err.name, err.message);
}

// task-03
function calcRectangleArea(width, height) {
    if (isNaN(width))
        throw new TypeError('Type width is incorect');

    if (isNaN(height))
        throw new TypeError('Type height is incorect');

    if (width <= 0 || height <= 0) {
        throw new Error("Width and height must be greater than zero.");
    }

    let area = width * height;
    return area;
}

try {
    calcRectangleArea(9, 4)
} catch (error) {
    console.log(error.name, error.message)
}

// task-04
class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = "MonthException";
    }
}

function showMonthName(month) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    if (month < 1 || month > 12 || isNaN(month)) {
        throw new MonthException("Incorrect month number.");
    }

    return months[month - 1];
}

try {
    console.log(showMonthName(5));
    console.log(showMonthName(14));
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

// task-05
function showUser(id) {
    if (id < 0)
        throw new Error("ID must not be negative.");

    return { id };
}

function showUsers(ids) {
    const usersID = [];

    for (const id of ids) {
        try {
            const user = showUser(id);
            usersID.push(user);
        } catch (error) {
            console.log(error.message);
        }

    }
    return usersID;
}

console.log(showUsers([7, -12, 44, 22]));

