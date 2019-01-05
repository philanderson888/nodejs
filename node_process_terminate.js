setInterval(function(){
	console.log("Hello World");
},500);
process.addListener("SIGINT",function(){
	console.log("You can't get rid of me!");
	console.log("SIGINT");
	console.log("Process ID" + process.pid);
});