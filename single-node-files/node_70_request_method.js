var http=require('http');
var url=require('url');
var qs = require('querystring');

var httpServer = http.createServer(function (req,res){
	if(req.method=='GET'){
		var url_parts = url.parse(req.url,true);
		res.writeHead(200);
		res.write(JSON.stringify(url_parts.query));
		res.end();
	}
	if(req.method=='POST'){
		var body='';
		req.on('data',function(data){
			body+=data;
		});
		req.on('end',function(){
			var POST = qs.parse(body);
			console.log(POST);
			res.writeHead(200);
			res.write(JSON.stringify(POST));
			res.end();
		});
	}
});
httpServer.listen(8080);