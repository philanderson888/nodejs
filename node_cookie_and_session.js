/* NOT COMPLETE */
var http=require('http');
var bodyParser=require('body-parser');
var express=require('express');
var cookieParser = require ('cookie-parser');
var session = require('express-session');
var app=express();
var cookie = function(req,res,next){
  res.cookie('testCookie','testCookieValue');
  console.log('Test Cookie Value %s', res.cookie);
  next();
};
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
app.use(session({
  genid: function(req) {
    return "testSessionString"; // use UUIDs for session IDs 
  },
  secret: 'keyboard cat'
}));
var cookie = function(req,res,next){
   try{
    req.cookies.testCookie.value="x";
    console.log(req.cookies.testCookie.value);
  }
  catch(e){
     console.log('invalid cookie');
  }
  next();
};

var Session=function(req,res,next){
  console.log('In session check');
  try{
    console.log(req.session)
    console.log(req.session.testValue);
    req.session.testValue++;
  }
  catch(e){
     req.session.testValue=1;
  }
  finally{
    console.log(req.session.testValue);
  }

  next();
};
var Logger01=function(req,res,next){
  console.log('in logger01');
  next();
};
/*app.use(Logger01);*/
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json - NOT REQUIRED HERE 
app.use(bodyParser.json());
app.use(cookieParser());
app.get('/user:id',cookie);
app.get('/',cookie,sendForm);
app.post('/processForm',cookie,Session,Logger01,processFormData);
http.createServer(app);
app.listen(8080);
console.log('Listening 8080');