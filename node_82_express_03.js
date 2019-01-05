var http=require('http');
var express=require('express');
var app=express();
function httpInitialise1(req,res,next){
	console.log('Initialising HTTP request 1');
	next();
}
function httpInitialise2(req,res,next){
	console.log('Initialising HTTP request 2');
	next();
}
function httpInitialiseTest(req,res,next){
	console.log('Initialising Test Path');
	next();
}
function httpResponse(req,res){
	console.log('Responding to http request');
	res.setHeader("Content-Type","text/html");
	res.write('HTTP Response.');
	res.end();
}
function httpResponseOnTest(req,res){
	console.log('Responding to http request on TEST PATH');
	res.setHeader("Content-Type","text/html");
	res.write('HTTP Response on TEST PATH');
	res.end();
}
function httpNilResponse(req,res){
  console.log('Response has not been built yet');
  res.write('HTTP Response has not been created for this path');
  res.end();
}
app.use(httpInitialise1,httpInitialise2);         // All Paths
app.use('/test',httpInitialiseTest);
app.get('/',httpResponse);       // GET to DEFAULT PATH
app.get('/test',httpResponseOnTest);  // GET TO TEST PATH
app.all('*',httpNilResponse);    // All Paths NOT CAUGHT ABOVE
var myWebServer=http.createServer(app);
myWebServer.listen(8080);
console.log('Listening 8080');