/* Illustrates callbacks multiple times and the effect on memory 

   Raise value of max_loop_size to have stack overflow exception */

var max_loop_size = 6000;

var callback = function(cb){
	cb();
};

var start=function(){

	var count = 0;

	var recur = function(){

		callback(function(){
				count++;
				if(count<100000){
					if( !(count % max_loop_size)){
						console.log("Calling recursive function with a setTimeout to clear memory via garbage collection at " + count);
						setTimeout(function(){
							recur();
						},50);
					}
					else{
						recur();
					}
				}

		});

	};

	recur();

};

start();