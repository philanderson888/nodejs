var http = require('http');
function httpRequest(req,res){
  switch(req.url) {
    case '/':
      console.log("[501] " + req.method + " to " + req.url);
      res.writeHead(501, "Not implemented", {'Content-Type': 'text/html'});
      res.end('<html><head><title>501 - Not implemented</title></head><body><h1>Not implemented!</h1></body></html>');
      break;
    case '/formhandler':
      console.log("[501] " + req.method + " to " + req.url);
      res.writeHead(501, "Not implemented", {'Content-Type': 'text/html'});
      res.end('<html><head><title>501 - Not implemented</title></head><body><h1>Not implemented!</h1></body></html>');
      break;
    default:
      res.writeHead(404, "Not found", {'Content-Type': 'text/html'});
      res.end('<html><head><title>404 - Not found</title></head><body><h1>Not found.</h1></body></html>');
      console.log("[404] " + req.method + " to " + req.url);
  };
}
var httpServer = http.createServer(httpRequest);
httpServer.listen(8080);
console.log('Server Listening 8080');