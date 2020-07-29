var http=require('http'),fs=require('fs'),path=require('path'),url=require('url');
var server=http.createServer(function(request,response){
	var urlParts=url.parse(request.url);
	console.log('***********************************');
	console.log('************************************');
	console.log("Incoming Request Is " + request);
	console.log(request);
	console.log('********************************');
	console.log("Request URL is " + request.url);
	console.log("URL Parse = " + url.parse(request.url));
	var page = 'pages' + urlParts.pathname;
	console.log("Path to file is " + page);
	fs.exists(page,function(exists){
		if(exists){
			response.writeHead(200,{'Content-Type':'text/html'});
			fs.createReadStream(page).pipe(response);
		}
		else{
			response.write('page not found');
			response.end();
		}
	});
}).listen(8888);
console.log('Listening On Port 8888');