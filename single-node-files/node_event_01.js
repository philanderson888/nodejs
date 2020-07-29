var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function(){
	console.log ("Event has happened");
};

eventEmitter.on('myEvent',myEventHandler);

eventEmitter.emit('myEvent');

