// personalmodule.js
function greetUser(username) {
    const time = new Date();
    const hour = time.getHours();

    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = 'Good morning';
    } else if (hour >= 12 && hour < 17) {
        greeting = 'Good day';
    } else if (hour >= 17 && hour < 22) {
        greeting = 'Good evening';
    } else {
        greeting = 'Good night';
    }

    return `${greeting}, ${username}!`;
}

module.exports = {
    greetUser: greetUser
};
