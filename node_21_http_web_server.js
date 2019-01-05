/**
 * Created by Phil on 08/01/2016.
 */
var http = require('http');
http.createServer(onRequest).listen(8888);
console.log('Server is now running on port 8888');

function onRequest(request,response){
    console.log("Client has sent in a request");
    console.log("Request URL = " + request.url);
    console.log("Request URI = " + request.uri);
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write("<h1>Here is the server response data</h1>");
    response.end();
}