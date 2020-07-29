var http=require('http');
function httpResponse(req,res){
	if(req.method=='GET'){
	  console.log('Responding to HTTP request')
	  res.writeHead(200,"Content-Type","text/html");
	  res.write('<html><form method="POST" action=""><input type="text" name="username" value="joe"><button type="submit">Submit</button></form></html>');
	  res.end();
	}
	if(req.method=='POST'){
		console.log('Processing form data');
		res.end('Processing form data');
	}
	if(req.method=='PUT'||req.method=='DELETE'){
		console.log('Request method is ' + req.method);
		res.end('Request method is ' + req.method);
	}
}
var httpServer=http.createServer(httpResponse);
httpServer.listen(8080);
console.log('Listening 8080');