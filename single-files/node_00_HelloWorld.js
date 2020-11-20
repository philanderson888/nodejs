var util=require("util");
var colors = require("colors");
var x = 10;
console.log(colors.green(x));
debugger;
console.log("test");
setTimeout(function(){
	console.log(colors.red("Hello World"));
	console.log(colors.inverse("WOW"));
	console.log(colors.rainbow("WOW"));
},2000);

