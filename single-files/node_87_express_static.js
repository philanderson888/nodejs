var http=require('http');
var express=require('express');
var path=require('path');
var app=express();
function httpResponse(req,res,next){
	console.log('HTTP request received');
	next();
}
function httpDefaultRoute(req,res){
  console.log('Serving index page on default route');
  console.log('Root Directory name is ' + __dirname);
  var filePath = path.join(__dirname + '/node_87_index.html');
  console.log('File path is ' + filePath);
  res.sendFile(filePath);
}
app.use(httpResponse);
app.use(express.static(path.join(__dirname + '/assets/public')));
app.get('/',httpDefaultRoute);
var httpServer=http.createServer(app);
httpServer.listen(8080);
console.log('listening 8080');