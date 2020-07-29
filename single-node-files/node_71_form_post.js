var http=require('http');
var qs=require('querystring');
function httpResponse(req,res){
    var POST={};
	if(req.method=='GET'){
    console.log('HTTP GET request received');
		res.writeHead(200,"Content-Type","text/html");
	  res.end('<html><form method="POST" action=""><input type="text" name="username" value="joe"><br /><input type="text" name="postcode" value="EN2 5AA"><br /><button type="submit">Submit</button></form></html>');
	}
	if(req.method=='POST'){
        console.log('HTTP POST request received');
        res.write('Processing HTTP POST data\n\n');
        req.on('data',function(data){
        	console.log(data);
        	console.log(data.toString);
            data = data.toString();
            data = data.split('&');
            for (var i = 0; i < data.length; i++) {
               var _data = data[i].split("=");
               POST[_data[0]] = _data[1];
            }
            console.log(POST);
        });
        req.on('end',function(){
            res.write(JSON.stringify(POST));
            res.write("\n\nUsername is " + POST.username);
            res.write("\n\nPostcode is " + POST.postcode);
            res.end();
        })
	}
} /* function httpResponse */
var httpServer=http.createServer(httpResponse);
httpServer.listen(8080);
console.log('Listening 8080');