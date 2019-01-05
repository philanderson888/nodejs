var http=require('http');
var fs = require('fs');

var httpServer = function(req,res){
	console.log('GET request received');
	fs.createReadStream('./node_socket_03.htm').pipe(res);	
};

http.createServer(httpServer).listen(8081);
console.log('listening 8081');