// task-02
const express = require('express');
const os = require('os');
const moment = require('moment');
const personalModule = require('./personalmodule');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const userInfo = os.userInfo();
    const currentTime = moment().format('llll');
    const greeting = personalModule.greetUser(userInfo.username);

    const htmlResponse = `
        <html>
            <head></head>
            <body>
                <p>Date of request: ${currentTime}</p>
                <p>${greeting}</p>
            </body>
        </html>
    `;
    res.send(htmlResponse);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
