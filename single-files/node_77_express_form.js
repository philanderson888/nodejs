/* http://stackoverflow.com/questions/4295782/how-do-you-extract-post-data-in-node-js */
var http=require('http');
var bodyParser=require('body-parser');
var express=require('express');
var app=express();
var sendForm=function(req,res,next){
	console.log('Sending Form To Client');
	res.send('<html><form method="POST" action="/processForm"><input type="text" name="username" value="Robert Black"><br /><input type="text" name="email" value="robert_black@abc.com"><br /><input type="submit" value="Submit" autofocus></form></html>');
}
var processFormData=function(req,res,next){
	console.log('Processing Form');
	res.setHeader('Content-Type', 'text/plain');
  res.write('Your Form Is Being Processed\n\n');
  res.write('Data Submitted in JSON format :\n');
	res.write(JSON.stringify(req.body, null, 2));
	var bodyData = JSON.stringify(req.body, null, 2);
  res.write('\n\nUsername is - ');
  res.write(req.body.username);
  res.write('\n\nEmail is - ')
  res.write(req.body.email);
  res.end();
  console.log('Form data finished processing');
  next();
}
var Logger01=function(req,res,next){
  console.log('in logger01');

}
/*app.use(Logger01);*/
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json - NOT REQUIRED HERE 
app.use(bodyParser.json());
app.get('/',sendForm);
app.post('/processForm',Logger01,processFormData);
http.createServer(app);
app.listen(8080);
console.log('Listening 8080');