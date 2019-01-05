var util=require("util"),
	http=require("http"),
	url=require("url"),
	path=require("path"),
	fs=require("fs");
http.createServer(function(request,response){

	var uri=url.parse(request.url).pathname;
	
	var filename=path.join(process.cwd(),uri);
	
	fs.exists(filename,function(exists){
		
		if(!exists){
		
			response.writeHead(404,{"Content-Type":"text/plain"});
			
			response.write("404 Not Found\n");
			
			response.end();
			
			return;
		
		}
	
		fs.readFile(filename,'binary',function(err,file){
			response.writeHead(200);
			response.write(file,"binary");
			response.end();
		});

	});
}).listen(8081);
console.log("Server listening 8081");