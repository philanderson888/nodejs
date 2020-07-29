var optimist = require('optimist');
var argv = optimist.argv;
/* TO RUN THIS MUST TYPE
node node_40_optimist.js --parameter1="hi"
*/
console.log(argv.parameter1);
console.log();
console.log("Full argv array is as follows");
console.error(argv);