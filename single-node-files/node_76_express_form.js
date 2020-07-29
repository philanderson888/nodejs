/* http://stackoverflow.com/questions/4295782/how-do-you-extract-post-data-in-node-js */
var http=require('http');
var express=require('express');
var app=express();
var sendForm=function(req,res,next){
	console.log('Sending Form To Client');
	res.send('<html><form method="POST" action="/processForm"><input type="text" name="user[name]" value="Robert Black"><br /><input type="text" name="user[email]" value="robert_black@abc.com"><br /><input type="submit" value="Submit" autofocus></form></html>');
	next();
}
var processFormData=function(req,res,next){
	console.log('Processing Form');
  res.send('Your Form Is Being Processed');
  next();
}
app.get('/',sendForm);
app.post('/processForm',processFormData);
http.createServer(app);
app.listen(8080);
console.log('Listening 8080');