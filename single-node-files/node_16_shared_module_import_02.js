/**
 * Created by Phil on 08/01/2016.
 */
var node_16_shared = require("./node_16_shared_module_export");
console.log("02 : before : " + node_16_shared.variable01);
node_16_shared.variable01="Second instance of shared variable 01";
console.log("02 : after : " + node_16_shared.variable01);
node_16_shared.variable01="2";
console.log("02 : after : " + node_16_shared.variable01);
node_16_shared.variable01="3";
console.log("02 : after : " + node_16_shared.variable01);
console.log("As you can see, variable01 is shared between the two objects");