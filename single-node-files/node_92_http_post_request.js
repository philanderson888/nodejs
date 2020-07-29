    var requestString={
		url: 'http://localhost:8080',       //URL to hit
		qs: {id: 777, name: 'phil'},        //Query string data
		method: 'POST', //Specify the method
		headers: {                          //Optional
			'Content-Type': 'MyContentType',
			'Custom-Header': 'Custom Value'
		}
	}			
			
			
	function httpRequest(error, response, body){
		if(error) {
			console.log(error);
		} else {
			console.log(response.statusCode, body);
		}
	});
	
	
	request(requestString,httpResponse); 