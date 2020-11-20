var http=require('http');
var server=http.createServer(function(req,res){
	res.write('Hello World');
	res.end();
});
server.listen(8080);
console.log('web server listening 8080...');