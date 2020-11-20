const fs = require('fs');
const child_process = require('child_process');


 
for(var i=0; i<3; i++) {

   if(i==0){
     var workerProcess1 = child_process.spawn('node', ['node_60_child_process.js',"1a","2a","3a"]);
   }

   if(i==1){
     var workerProcess2 = child_process.spawn('node', ['node_60_child_process.js',"1a","2a","3a"]);
   }

}


workerProcess1.stdout.on('data', function (data) {
   console.log('line 20');
   console.log("line 21 " + data.toString());
   var x = JSON.parse(data);
   var a = x.a;
   var b = x.b;

   console.log("Returned value a is " + x.a);
   console.log("Returned value b is " + x.b);
   console.log(JSON.parse(data));

});

workerProcess1.stderr.on('data', function (data) {
      console.log('line 32');
      console.log('stderr: ' + data);
});

workerProcess1.on('close', function (code) {
        console.log('child process exited with code ' + code);
}); 




workerProcess2.stdout.on('data', function (data) {
   var x = JSON.parse(data);
   var a = x.a;
   var b = x.b;

   console.log("Returned value a is " + x.a);
   console.log("Returned value b is " + x.b);
   console.log(JSON.parse(data));

});

workerProcess2.stderr.on('data', function (data) {
   console.log('stderr: ' + data);
});

workerProcess2.on('close', function (code) {
        console.log('child process exited with code ' + code);
}); 