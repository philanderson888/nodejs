/**
 * Created by Phil on 08/01/2016.
 */
var node_15_module = require("./node_15_module_export");
node_15_module.method1();
node_15_module.method2();
console.log("Variable 01 holds " + node_15_module.variable01);
node_15_module.variable01="New Value Of Variable 01";
console.log(node_15_module.variable01);