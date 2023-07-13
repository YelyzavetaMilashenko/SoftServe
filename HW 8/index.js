// task-01
function upperCase(str) {
    let pattern = /[A-Z]/g;

    if (pattern.test(str)) {
        console.log("String's starts with uppercase character");
    } else {
        console.log("String's not starts with uppercase character");
    }
}

upperCase('regexp');
upperCase('RegExp');

// task-02
function checkEmail(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    return pattern.test(email);
}
checkEmail("Qmail2@gmail.com");

// task-03
const input = 'Java Script';
const output = input.replace(/(\w+)\s+(\w+)/, '$2, $1');
console.log(output);

// task-04
function checkCreditCard(card) {
    let pattern = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/g;
    return pattern.test(card)
}
console.log(checkCreditCard('9999-9999-9999-9999'))

// task-05
function checkEmail(email) {
    let pattern = /^[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*@[a-z]+\.[a-z]{2,}$/;

    if (pattern.test(email)) {
        return 'Email is correct!';
    } else {
        return 'Email is not correct!';
    }
}

console.log(checkEmail('my_mail@gmail.com'));
console.log(checkEmail('#my_mail@gmail.com'));
console.log(checkEmail('my_ma--il@gmail.com'));

// task-06
function checkLogin(login) {
    let pattern = /^[A-Za-z][A-Za-z0-9.]{1,9}$/;
    let numbers = login.match(/[0-9]+(\.[0-9]+)?/g);

    if(pattern.test(login)) {
        console.log('Numbers:', numbers);
        return true;
    } else {
      console.log('Numbers not found.');
      return false;
    }
}  

console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('ee1*1ret3'));