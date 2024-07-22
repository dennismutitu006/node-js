const { createServer } = require('node:http');
//or
//import {createServer} from node:http;
// createServer() creates a new HTTP server and returns it.
//this server is set to listen to the following port and hostname
const hostname = '127.0.0.1';
const port = 3000;
//this callback func is called when the server is ready
const server = createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`
});
