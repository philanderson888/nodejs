var http=require('http');

var httpServer = function(req,res){
	console.log('Incoming GET request');
	res.end('hello world');
}
http.createServer(httpServer).listen(8081);
console.log('listening 8081');