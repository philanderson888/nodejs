/**
 * Created by Phil on 08/01/2016.
 *
 * PS This does not work
 *
 */
var object01 = {
    function01:function(){
        console.log("Running Function 01");
        console.log(this===object01);
    }
}

object01.function01();

function global(){
    console.log("Inside Global Function");
    console.log(this===global);
}

global();