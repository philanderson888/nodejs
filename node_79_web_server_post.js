var http=require('http');
function httpResponse(req,res){
	console.log('Responding to HTTP request');
	if(req.method=='GET'){
		res.writeHead(200,"Content-Type","text/html");
	  res.write('<html><form method="POST" action=""><input type="text" name="username" value="joe"><br /><input type="text" name="postcode" value="EN2 5AA"><br /><button type="submit">Submit</button></form></html>');
	}
	if(req.method="POST"){
		var postDataArray=[];
		var postJSONstring='';
		req.on('data',function(data){
			console.log(data);
			res.write("POST data received\n\n");
			res.write('RAW POST data string is\n\n');
			res.write(data);
			res.write('\n\n\n');
			data=data.toString();
			postDataArray=data.split('&');
			res.write('There are ' + postDataArray.length + ' items sent for processing as POST data\n\n');
			for(var i=0;i<postDataArray.length;i++){
				res.write('Data item ' + i + ' is ');
			  res.write(postDataArray[i]);
			  res.write('\n\n\n');			
			}
		  res.write('** NOTE THAT THIS HAS NOT ACTUALLY PARSED THE FORM DATA - FOR THIS WE CAN USE QUERYSTRING');	
			res.end();
		});
	}
}
var httpServer=http.createServer(httpResponse);
httpServer.listen(8080);
console.log('Listening 8080');