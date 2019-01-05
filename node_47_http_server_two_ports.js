var http=require('http');
http.createServer(onRequest_a).listen(9011);
http.createServer(onRequest_b).listen(9012);


function onRequest_a(req,res){
  res.write('Response from 9011\n');
  res.end();
}

function onRequest_b(req,res){
  res.write('Response from 9012\n');
  res.end();
}