var http=require('http');
var express=require('express');
var path=require('path');
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
	res.write('<html><head><title>Home</title></head><body><a href="/">Home</a> | <a href="/page2">Page 2</a><h1>Home</h1></body></html>');
	res.end();
}
function httpTest1(req,res,next){
	console.log('HTTP Response 1 for TEST PATH');
	next();
}
function httpTest2(req,res){
	console.log('HTTP Response 2 for TEST PATH');
	res.setHeader("Content-Type","text/html");
	res.write('HTTP Response 2 for TEST PATH');
	res.end();
}
function servePage2(req,res){
	console.log('Serving page2.htm');
	console.log('__dirname is ' + __dirname);
	var filePath=path.join(__dirname + '/node_85_express_05_page2.html');
	console.log('filePath is ' + filePath);
	res.sendFile(filePath);
}
function httpNilResponse(req,res){
  console.log('Response has not been built yet');
  res.write('HTTP Response has not been created for this path');
  res.end();
}
app.use(httpInitialise1,httpInitialise2);         // All Paths
app.use('/test',httpInitialiseTest);
app.get('/',httpResponse);             // GET to DEFAULT PATH
app.get('/test',httpTest1,httpTest2);  // GET TO TEST PATH
app.get('/page2',servePage2);
app.all('*',httpNilResponse);    // All Paths NOT CAUGHT ABOVE
var myWebServer=http.createServer(app);
myWebServer.listen(8080);
console.log('Listening 8080');