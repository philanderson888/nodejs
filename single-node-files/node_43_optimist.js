var optimist = require('optimist');
var argv = optimist.argv;
if(argv.s){
	console.log ("s is true");
}
if(argv.t){
	console.log("t is true");
}

console.log("x is %d and y is %d ",argv.x,argv.y);

console.log("parameter1 is " + argv.parameter1);

console.log("Non-hyphenated options are stored in the underscore array")
console.log("argv._ - " + argv._);

console.log(argv);


/* 
run with 
node node_43_optimist.js -st -x 10 -y 11 --parameter1="parameter1" hello this is some extra text
*/