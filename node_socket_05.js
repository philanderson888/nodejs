var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);
io.on('connection',function(socket){
	console.log('connection to socket established at ' + new Date());
	socket.on('disconnect',function(){
		console.log('socket has disconnected');
	});
	socket.on('chat_message',function(msg){
		console.log('message received from chat room');
		console.log(msg);
	});
});
app.get('/',function(req,res){
	console.log('Sending HTM file to client');
	res.sendFile(__dirname + '/node_socket_05.htm');
});
http.listen(8081,function(){
	console.log('listen 8081');
});