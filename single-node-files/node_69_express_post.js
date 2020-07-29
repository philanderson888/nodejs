var http=require('http');
var express=require('express');
var myLogger=function(req,res,next){
	res.send('Inside POST request, logging function for all paths');
	console.log('Inside POST request, logging function for all paths');
	next();
}
var myLogger2=function(req,res,next){
	res.send('Inside POST request, logging function for path "TEST" ');
	console.log('Inside POST request, logging function for path "TEST" ');
		console.log("Request Base URL Is " + req.baseUrl);
	next();
}
var myLogger3=function(req,res,next){
	res.send('Inside GET request, logging function for all paths ');
	console.log('Inside GET request, logging function for all paths ');
	console.log("Request Base URL Is " + req.baseUrl);
	next();
}
var myLogger4=function(req,res,next){
	res.send('Inside PUT request, logging function for path "TEST2" ');
	console.log('Inside PUT request, logging function for path "TEST2" ');
	next();
}
var app=express();
app.post('/',myLogger);
app.post('/test',myLogger2);
app.get('/',myLogger3);
app.put('/test2',myLogger4);
http.createServer(app).listen(8080);
console.log('Listening 8080');
console.log(app.locals);
app.locals.title="My application";
app.locals.email="abc@abc.com";
console.log("Title Is " + app.locals.title);
console.log("Email is " + app.locals.email);
