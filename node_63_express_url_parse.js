var express=require('express');
var app=express();
app.get('/',function(req,res){
  console.log("request query string is " + req.query);
  var response = "<p>Make sure URL is of form<p>";
  response += "<p>http://localhost:8080?id=7&name=phil</p>";
  response += "<p>request query string is " + req.query + "</p>";
  response += "<p>request query id is " + req.query.id + "</p>";
  response += "<p>request query name is " + req.query.name + "</p>";
  response += "<p>" + "</p>";
  response += "<p>" + "</p>";
  response += "<p>" + "</p>";
  res.send(response);
});
app.listen(8080);
console.log("Listening 8080");