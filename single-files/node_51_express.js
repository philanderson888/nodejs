var http=require('http');
var express=require('express');
var app=express();
app.get('/',function(req,res){
	console.log('inside get function');
  res.send('Hello World');
});
http.createServer(app).listen(8080);
console.log('listening 8080');