var events = require('events');
var eventEmitter = new events.EventEmitter;

console.log('Running code to initialise Event Generator');

var myEventHandler = function(){
	console.log("Event Created Inside Generator");
};


eventEmitter.on('myEvent',myEventHandler);

eventEmitter.emit('myEvent');
eventEmitter.emit('myEvent');