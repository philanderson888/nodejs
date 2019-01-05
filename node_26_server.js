var mongo = require('mongodb').MongoClient;
var client=require('socket.io').listen(8080).sockets;
console.log('=============================');
console.log('=============================');
console.log('=============================');
console.log('=============================');
console.log('=============================');
console.log('Listening 8080');
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


    	console.log('Someone has connected');
    	// Wait for input
    	socket.on('input', function(data){
    		console.log(data);
    		var name = data.name;
    		var message = data.message;
    		var whitespacePattern = /^\s*$/;
    		if (whitespacePattern.test(name)){
    			console.log('Invalid Name');
    		}
    		else if (whitespacePattern.test(message)){
    			console.log('Blank message');
    		}
    		else{
    			col.insert({name:name,message:message},function(){
 		   			console.log('data inserted');
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
