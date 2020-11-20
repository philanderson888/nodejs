var http=require('http');
var express=require('express');
var app=express();
var myLogger=function(req,res,next){
	console.log('inside logger for all paths');
	next();
}
var myLogger2=function(req,res,next){
	console.log('inside logger when path is /test');
	next();
}
app.use(myLogger);                    /* all requests trigger this */
app.use('/test',myLogger2);           /* requests to /test trigger this */
app.get('/',function(req,res){
	res.send('inside default get response');
});
app.get('/test',function(req,res){
  res.send('inside get function for path /test');
});
http.createServer(app).listen(8081);
console.log('listening 8081');