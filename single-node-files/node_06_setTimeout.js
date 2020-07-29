var x = function(){
    console.log("Run Anonymous Function Straight Away");
}
var y = function(){
    console.log("Run function after timeout");
}
x();  // runs function straight away
setTimeout(y,2000);
setTimeout(y(),2000);        // don't do this as it calls the function straight away
