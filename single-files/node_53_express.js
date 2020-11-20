var http=require('http');
var express=require('express');
var app=express();
var myLogger=function(req,res,next){
	console.log('inside logger middleware');
	next();
}
app.use(myLogger);
app.get('/',function(req,res){
	console.log('inside get');
	res.send('<h1>hello world</h1>');
})

http.createServer(app).listen(8080);
console.log('listening 8080');