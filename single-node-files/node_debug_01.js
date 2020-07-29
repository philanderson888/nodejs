var util=require("util");
var colors = require("colors");
var x = 10;
var y = 11;
console.log(colors.green(x));

setTimeout(function(){
    console.log(colors.red("Hello World"));
    console.log(colors.inverse("WOW"));
    console.log(colors.rainbow("WOW"));
},2000);

var debug = require ('debug');

console.log('console.log a message');
console.log('console.log message 2');
debug('debug a message');

/* now run the application with DEBUG=* node node_debug_01.js */

