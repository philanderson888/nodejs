var request=require('request');

function httpResponse(error,response,body){
	if(error){
		console.log('Error ' + error);
	}
	else{
		console.log('Body returned is \n\n' + body);
		console.log('Status ' + response.statusCode);
	}
}
request('http://localhost:8080',httpResponse);