console.log('STDIN LAB');
console.log('INPUT NOW IS TEXT UTF8 ENCODING');
console.log('Enter 3 items of text or quit to exit early\n');
process.stdin.resume();

process.stdin.setEncoding('utf8');

var x = 0;
var dataArray=[]
process.stdin.on('data',function(text){
	dataArray.push(text);
	if(text=='quit\r\n'){
		for(var i=0;i<dataArray.length;i++){
			console.log("Item " + i + " is " + dataArray[i]);
		}
		process.exit();
	}
	if(x==2){
		console.log("\r\n\r\n");
		console.log("Array is ");
		console.log(dataArray);
		console.log("\r\n\r\n");
		for(var i=0;i<dataArray.length;i++){
			console.log("Item " + i + " is " + dataArray[i]);
		}
		process.exit();
	}
	x++;
});