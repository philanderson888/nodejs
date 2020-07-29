var http=require('http');
var url=require('url');
var qs=require('querystring');
function httpResponse(req,res){
	console.log('HTTP Request Received');
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("<html><h1>Web Page</h1>");
	res.write("Request URL is " + req.url);
	res.write("<br />URL Parse yields " + JSON.stringify(url.parse(req.url)));
	console.log(url.parse(req.url));
	var url_parts=url.parse(req.url,true);
	var query=url_parts.query;
	console.log("Query is " + query);
	res.write("<br /> Query is " + query);
  res.write("<br /> ID in query string is " + query.id);
  res.write("<br /> Name in query string is " + query.name);
  if(req.method=='GET'){
  	console.log('INCOMING GET REQUEST');
  		res.write("</html");
	    res.end();
  }
  if(req.method=='POST'){
  	console.log('INCOMING POST REQUEST');
  	var POSTdata='';
  	req.on('data',function(data){
  		POSTdata+=data;
  	});
  	req.on('end',function(){
  		var parsedData=qs.parse(POSTdata);
      res.write(JSON.stringify(POSTdata));
      res.write('<hr/>');
      res.write("Parsed data is <br />" + JSON.stringify(POSTdata));    
 		  res.write("</html");
		  res.end();
  	});
  }
  if(req.method=='PUT'){
  	console.log('INCOMING PUT REQUEST');
  }

}
var httpServer=http.createServer(httpResponse);
httpServer.listen(8080);
console.log('Listen 8080');