var util = require("util"),
	http=require("http");
http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("Hello World!");
	response.write("\n");  // new line 
	response.write("<h1>Test Header</h1>");
	response.write("<script>console.log('Web page log entry');</script>");
	response.end("Ending communications - last line and closing now");
}).listen(8080);
console.log("Server running on localhost 8080");