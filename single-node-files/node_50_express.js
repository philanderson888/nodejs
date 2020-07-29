var http=require('http');
var express=require('express');
var app=express();
app.use(function(req,res,next){
	  console.log('Inside use function');
	  next();
	});
http.createServer(app).listen(8080);
console.log('Listening 8080');