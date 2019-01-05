var http=require('http');
function httpResponse(req,res){
	if(req.method=='GET'){
		res.writeHead(200,"Content-Type","text/html");
	  res.end('<html><form method="POST" action="" enctype="application/json"><input type="text" name="username" value="joe"><br /><input type="text" name="postcode" value="EN2 5AA"><br /><button type="submit">Submit</button></form></html>');
	}
	if(req.method=='POST'){
		var POSTdata='';
		req.on('data',function(data){
			console.log('POST data is being processed');
			res.write('POST data is being processed\n\n');
			console.log("Data is " + data);
			POSTdata+=data;
		});
		req.on('end',function(){
			console.log(JSON.stringify(POSTdata));
			res.write(JSON.stringify(POSTdata));
			res.end('');
		});
		
	}
}
var httpServer=http.createServer(httpResponse);
httpServer.listen(8080);
console.log('Listening 8080');