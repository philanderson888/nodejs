var http = require('http');
var httpServer = http.createServer(onRequest);
function onRequest(request,response){
    console.log("Client has sent in a request");
    console.log("Request URL = " + request.url);
    console.log("Request URI = " + request.uri);
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write("<h1>Here is the server response data on port 8890</h1>");
    response.end();
}
httpServer.listen(8890);
console.log('Server is now running on port 8890');