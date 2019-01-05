var http=require('http');
var counter = 0;
var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	counter++;
	var message = "Number of visits : " + counter;
	res.end(message + '\n');
	if (counter>=10){
		process.exit();
	}
});
server.listen(8080);
console.log('listening 8080');