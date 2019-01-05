var request=require('request');

function httpResponse(error,response,body){
  if(error){
  	console.log('Error ' + error);
  }
  else{
  	console.log("\n\nBody Returned Is \n\n" + body)
  	console.log("\nResponse Status Code is " + response.statusCode);
  }
}
request('http://www.google.com',httpResponse);