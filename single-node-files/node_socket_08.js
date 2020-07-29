/* Now want to emit a new chat message to all clients */
var app = require('express')();
var http = require('http').Server(app);
var io = require ('socket.io')(http);
var client=require('socket.io').listen(8082).sockets;
io.on('connection',function(socket){
	console.log('connection established');
	socket.on('chat_message',function(msg){
		console.log('message received : ' + JSON.stringify(msg));
		console.log('Name : ' + msg.name + ' ===> Message : ' + msg.message);
		console.log('Server is now emitting message');
		socket.emit('server_emit',{'socket_emit':'socket_emit'});
	socket.emit('server_emit', msg);  // just on one socket */
			io.emit('server_emit',{'io_emit':'io_emit'});
		io.emit('server_emit',msg);     // to all clients
	}); 
});
app.get('/',function(req,res){
	console.log('sending HTM file to client');
	res.sendFile(__dirname + '/node_socket_08.htm');
});
http.listen('8081');
console.log('listen 8081');
