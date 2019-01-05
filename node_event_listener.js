var events = require('events');
var eventEmitter = new events.EventEmitter;

console.log('You can see me from Event Listener');

var myEventHandler = function(){
	console.log("Event");
};

eventEmitter.on('myEvent',myEventHandler);
