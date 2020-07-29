var http=require('http');
var express=require('express');
var app=express();
var myLogger=function(req,res,next){
	console.log('inside logging function 1');
	next();
}
var myLogger2=function(req,res,next){
	console.log('inside logging function 2');
	next();
}
var myLogger3=function(req,res,next){
	console.log('inside logging function 3');
	next();
}
var myLogger4=function(req,res,next){
	console.log('inside logging function 4');
	next();
}
app.use(myLogger);
app.use(myLogger2);
app.use(myLogger3,myLogger4);
app.get('/',function(req,res){
	res.send('Response from GET DEFAULT PATH /');
})
http.createServer(app).listen(8080);
console.log('listening 8080');