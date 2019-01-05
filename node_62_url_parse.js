var http=require('http');
var url = require('url');
/* URL of form http://localhost:8080?id=7&name=phil */
var server = http.createServer(function(req,res){
	var url_parts = url.parse(req.url,true);
	var query=url_parts.query;
	console.log("Incoming URL is " + req.url);
	console.log("Query String Is " + url_parts);
	console.log("Query Is " + JSON.stringify(query));
	console.log("id = " + query.id);
	console.log("name = " + query.name);
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("<p>Make sure your URL is of the form </p>");
	res.write("<p> http://localhost:8080?id=7&name=phil </p>");
	res.write("<p> to make this lab work!</p>");
	res.write("<p>Incoming URL is " + req.url + "</p>");
	res.write("<p>Incoming Query String is " + url_parts + "</p>");
	res.write("<p>Query is " + query + "</p>");
  res.write("<p>id = " + query.id + "</p>");
	res.write("<p>name = " + query.name + "</p>");
	res.end();
	});
server.listen(8080);
console.log("listening 8080");