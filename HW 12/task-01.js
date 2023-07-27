// task-01
const http = require('http');
const os = require('os');
const path = require('path');

const hostname = 'localhost';
const port = 5000;

const server = http.createServer((req, res) => {
    const userInfo = os.userInfo();
    const systemType = os.type();
    const uptimeMinutes = Math.floor(os.uptime() / 60);
    const currentWorkingDir = process.cwd();
    const serverFileName = path.basename(__filename);

    const htmlResponse = `
        <html>
            <head>
                <title>Node.js Server Info</title>
            </head>
            <body>
                <h1>System information</h1>
                <p>Current user name: ${userInfo.username}</p>
                <p>OS Type: ${systemType}</p>
                <p>System work time: ${uptimeMinutes} minutes</p>
                <p>Current work directory: ${currentWorkingDir}</p>
                <p>Server file name: ${serverFileName}</p>
            </body>
        </html>
    `;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(htmlResponse);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
