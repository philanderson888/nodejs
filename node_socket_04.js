var app=require('express')();
var http=require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
	res.sendFile(__dirname + '/node_socket_04.htm');
});

io.on('connection',function(socket){
	console.log('connection created socket.io');
});

http.listen(8081,function(){
	console.log('listen 8081');
});