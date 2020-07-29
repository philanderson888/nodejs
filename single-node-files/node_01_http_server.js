var http = require('http');
http.createServer(function (req, res) {
	console.log('Request has come in!');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, '127.0.0.1');
console.log('HELLO WORLD');