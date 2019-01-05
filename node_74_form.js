var http = require('http');
function httpRequest(req,res){
  switch(req.url) {
    case '/':
      console.log("[501] " + req.method + " to " + req.url);
      // show the user a simple form
      console.log("[200] " + req.method + " to " + req.url);
      res.writeHead(200, "OK", {'Content-Type': 'text/html'});
      res.write('<html><head><title>Hello Noder!</title></head><body>');
      res.write('<h1>Welcome Noder, who are you?</h1>');
      res.write('<form enctype="application/x-www-form-urlencoded" action="/formhandler" method="post">');
      res.write('Name: <input type="text" name="username" value="John Doe" /><br />');
      res.write('Age: <input type="text" name="userage" value="99" /><br />');
      res.write('<input type="submit" autofocus/>');
      res.write('</form></body></html');
      res.end();
      break;
    case '/formhandler':
      if (req.method == 'POST') {
        var responseData='<hr />';
        console.log("[200] " + req.method + " to " + req.url);
        req.on('data', function(chunk) {
          console.log("Received body data:");
          console.log(chunk.toString());
          responseData+=chunk.toString();
        });
        req.on('end', function() {
          // empty 200 OK response for now
          res.writeHead(200, "OK", {'Content-Type': 'text/html'});
          res.write('<h1>Processing Form Data</h1>');
          res.write(responseData);
          res.end();
        });
      } 
      else {
        console.log("[405] " + req.method + " to " + req.url);
        res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
        res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
      }
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