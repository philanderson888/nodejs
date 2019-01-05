/**
 * Created by Phil on 08/01/2016.
 */
var object01 = {
    function01:function(){
        console.log("Running Function 01");
        console.log(this==object01);
    }
}

object01.function01();

function independent(){
    console.log("Inside Independent Function");
}