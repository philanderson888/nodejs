const fs = require('fs');
const child_process = require('child_process');
 
for(var i=0; i<3; i++) {
   var worker_process = child_process.fork("node_60_child_process.js", [i]);	

	 console.log(worker_process); 



   worker_process.on('close', function (code) {
      console.log('child process exited with code ' + code);
   });
}