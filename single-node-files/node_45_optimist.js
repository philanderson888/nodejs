var optimist=require('optimist');
var argv=optimist.demand(['x','y']).argv;
console.log("x is " + argv.x + " and y is " + argv.y);