var http = require('http');
var httpServer1 = function(request,response){
	response.writeHead(200);
	response.end('Hello World');
};
http.createServer(httpServer1).listen(8081);
console.log('Listening on port 8081');