var https = require('https');  // load http module

console.log('BEGIN PROGRAM');

// http.get( url, callback)
// http.get is asynchronous, and will call the function call back
// when response is returned.
// the program will continue onto the next statement [line 24]
// The response output will occur when the response end
//

https.get('https://randomuser.me/api', function (response) {
    //console.log('Response Status:', response.statusCode);
    //console.log('headers', response.headers)
    var body = '';

    // While data is received concat to body
    response.on('data', function (d) {
        body += d;
    });

    // on response end log the complete body
    response.on('end', function () {
        var parsed = JSON.parse(body);
        //console.log(parsed)
        console.log('Firstname:', parsed.results[0].name.first);
    });

}).on('error', function (err) {  // log error if it occurs
    console.log('Error:', err.message);
});

console.log('END PROGRAM');  //