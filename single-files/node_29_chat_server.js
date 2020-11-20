var mongo = require('mongodb').MongoClient;
var client=require('socket.io').listen(8081).sockets;
console.log('=============================');
console.log('=============================');
console.log('=============================');
console.log('=============================');
console.log('=============================');
console.log('Listening 8081');
console.log('=============================');
console.log('=============================');
console.log('=============================');
console.log('=============================');
console.log('=============================');
console.log(mongo);
console.log('=============================');
console.log('=============================');
console.log('=============================');
console.log('=============================');
console.log('=============================');
console.log(client);
console.log('=============================');
console.log('=============================');
console.log('=============================');
console.log('=============================');
console.log('=============================');

mongo.connect('mongodb://127.0.0.1/chat',function(err,db){

	if(err) throw err;

	client.on('connection',function(socket){
    	// database collection
    	var col = db.collection('messages');
        // s = status
        var sendStatus = function(s){
            // passing a string 'name' is status, value will be inside string s
            socket.emit('status', s);
        };

    	console.log('Someone has connected');

        // Emit all messages when client initially connects
        col.find().limit(100).sort({_id:1}).toArray(function(err,mongoInitialChatHistory){
            if(err)throw err;
            socket.emit('output',mongoInitialChatHistory);
        });
    	// Wait for input
    	socket.on('input', function(data){
    		console.log(data);
    		var name = data.name;
    		var message = data.message;
    		var whitespacePattern = /^\s*$/;
    		if (whitespacePattern.test(name)){
    			console.log('Invalid Name');
                sendStatus('Name is required');
    		}
    		else if (whitespacePattern.test(message)){
    			console.log('Blank message');
                sendStatus('Message is required');
    		}
    		else{
                col.insert({name:name,message:message},function(){
                    console.log('data inserted');
                    // This is sending status as an object
                    sendStatus({
                        message: 'Message Sent',
                        clear:true
                    });

                    // Emit latest message to all clients as an array 
                    //client.emit('output','new message to send to all clients');
                    // as JSON
                    //client.emit('output', data);
                    // as Array
                    client.emit('output', [data]);

    			});

    		}
       	});
	});

});


/*
client.on('connection',function(socket){
    console.log('Someone has connected');
});
*/