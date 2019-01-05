/**
 * Created by Phil on 08/01/2016.
 */
var myObject01 = {
    id:"1",
    name:"John"
};

// Does not create a new object, just references original object
var myObject02 = myObject01;
myObject02.id="2";
myObject02.name="Peter";

console.log(myObject01.id);
console.log(myObject01.name);
console.log(myObject02.id);
console.log(myObject02.name);
console.log(myObject01);
console.log(myObject02);