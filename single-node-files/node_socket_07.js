var app = require('express')();
var http = require('http').Server(app);
var io = require ('socket.io')(http);
io.on('connection',function(socket){
	console.log('connection established');
	socket.on('chat_message',function(msg){
		console.log('message received : ' + JSON.stringify(msg));
		console.log('Name : ' + msg.name + ' ===> Message : ' + msg.message);
	}); 
});
app.get('/',function(req,res){
	console.log('sending HTM file to client');
	res.sendFile(__dirname + '/node_socket_07.htm');
});
http.listen('8081');
console.log('listen 8081');
