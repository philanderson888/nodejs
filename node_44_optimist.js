var optimist=require('optimist');
var argv=optimist.default('x',10).default('y',10).argv;
console.log("x is " + argv.x + " and y is " + argv.y);