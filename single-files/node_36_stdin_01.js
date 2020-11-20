console.log('Inputting raw text via stdin');

console.log('Warning : stdin accepts hex');

process.stdin.resume();

process.stdin.on('data',function(text){
		console.log(text);
		if(text==='quit'){
			process.exit();
		}
});