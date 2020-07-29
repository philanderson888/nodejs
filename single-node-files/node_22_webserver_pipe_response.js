/**
 * Created by Phil on 12/01/2016.
 */
var http=require('http');
var fs = require('fs');

console.log('Server listening port 8888');
function onRequest(request,response){
    console.log('Request Has Been Made');
    console.log('Request.URL is ' + request.url);
    console.log('Request method is ' + request.method);
    if(request.method=="GET" && request.url == '/') {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./index.htm").pipe(response);
    }
    else{
        send404response(response);
    }
}

function send404response(response){
    response.writeHead(404,{"Content-Type":"text/plain"});
    response.write('Error 404 : Page Not Found');
    response.end();
}

http.createServer(onRequest).listen(8888);