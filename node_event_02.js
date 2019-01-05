var events = require('events');
var eventEmitter = new events.EventEmitter;

var myEventHandler = function(){
	console.log("Event");
};

eventEmitter.on('myEvent',myEventHandler);

eventEmitter.emit('myEvent');







eventEmitter.on('youHaveTakenTooLong',function(message){
	console.log(message);
	process.exit();
});

var numberOfEvents = 0;

setInterval(function(){
	eventEmitter.emit('myEvent');
	numberOfEvents++;
	if(numberOfEvents==10){
		eventEmitter.emit('youHaveTakenTooLong',"You have taken too long");
	}
},300); 