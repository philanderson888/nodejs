var http=require('http');
var express=require('express');
var app=express();
function httpInitialise(req,res,next){
	console.log('Initialising HTTP request');
	next();
}
function httpResponse(req,res){
	console.log('Responding to http request');
	res.setHeader("Content-Type","text/html");
	res.write('HTTP Response.');
	res.end();
}
function httpNilResponse(req,res){
  console.log('Response has not been built yet');
  res.write('HTTP Response has not been created for this path');
  res.end();
}
app.use(httpInitialise);         // All Paths
app.get('/',httpResponse);       // GET to DEFAULT PATH
app.all('*',httpNilResponse);    // All Paths NOT CAUGHT ABOVE
var myWebServer=http.createServer(app);
myWebServer.listen(8080);
console.log('Listening 8080');