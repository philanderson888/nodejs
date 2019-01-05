var http=require('http');
var visits=0;
var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	visits++;
	var message = 'Visits = ' + visits;
  res.end(message + '\n');
  console.log(message);
  if(visits>=10){
   process.exit();
  }
});
server.listen(8080);
console.log('listening 8080');
