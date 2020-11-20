/**
 * Created by Phil on 08/01/2016.
 */

module.exports = {};   //((default added even if we don't'))

// Public methods (functions)

function printOut1(){
    console.log("Film1:2010");
}
function printOut2(){
    console.log("Film2:2012");
}

// Private method which is NOT EXPORTED
function printOut3(){
    console.log("Film3:2013");
}

//Export
module.exports.print1=printOut1;
module.exports.print2=printOut2;




