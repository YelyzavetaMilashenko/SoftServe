// task-01
function getPromise(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay)
    })
}

getPromise("test promise", 2000).then((data) => console.log(data));

// task-02
function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
        let result = 1;
        for (let i = 0; i < arr.length; i++) {
            if (typeof (arr[i]) === 'number') {
                result *= arr[i];
            } else {
                reject('Error! Incorrect array!');
            }
        }
        resolve(result)
    })
}

calcArrProduct([3, 4, 5]).then(result => console.log(result)).catch((err) => console.warn(err));
calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result)).catch((err) => console.warn(err));

// task-03
function askForNumber() {
    return new Promise(function (resolve, reject) {
        function ask() {
            const number = prompt('Please enter a number:');
            if (isNaN(number) || number === null) {
                ask();
            } else {
                resolve(Number(number));
            }
        }
        ask();
    });
}

askForNumber()
    .then(function (result) {
        console.log(result);
    });

