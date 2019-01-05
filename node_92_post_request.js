var request=require('request');

var requestString={
	url: 'http://localhost:8080',       //URL to hit
	qs: {id: 777, name: 'phil', username:'rob' ,userage: 17},        //Query string data
	method: 'POST', //Specify the method
	headers: {                          //Optional
		'Content-Type': 'MyContentType',
		'Custom-Header': 'Custom Value'
	}
};
	
var httpResponse = function (error, response, body){
	if(error) {
		console.log(error);
	} 
	else {
		console.log(response.statusCode, body);
	}
};



request(requestString, httpResponse); 