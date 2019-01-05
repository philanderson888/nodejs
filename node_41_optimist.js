var optimist = require('optimist');
var argv = optimist.argv;
/* To run this type node node_41_optimist.js -x 10 -y 11 */
console.log("x is %d and y is %d", argv.x, argv.y);