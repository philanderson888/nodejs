/**
 * Created by Phil on 08/01/2016.
 */
var node_16_shared = require("./node_16_shared_module_export");
console.log("01 : before : " + node_16_shared.variable01);
node_16_shared.variable01="First instance of shared variable 01";
console.log("01 : after : " + node_16_shared.variable01);
node_16_shared.variable01="x";
console.log("01 : after : " + node_16_shared.variable01);
node_16_shared.variable01="y";
console.log("01 : after : " + node_16_shared.variable01);
