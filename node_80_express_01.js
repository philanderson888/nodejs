var http=require('http');
var express=require('express');
var app=express();
function httpResponse(req,res,next){
	console.log('Responding to http request');
	res.setHeader("Content-Type","text/html");
	res.write('HTTP Response');
	res.end();
}
app.all('/',httpResponse);
var myWebServer=http.createServer(app);
myWebServer.listen(8080);
console.log('Listening 8080');