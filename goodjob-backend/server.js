const http = require('http');
const app = require('./app');

const port = process.env.port || 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log('You are connected, route to heroes please ...');
});