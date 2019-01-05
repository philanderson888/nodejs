var http = require('http');  // load http module

console.log('BEGIN PROGRAM');

// http.get( url, callback)
// http.get is asynchronous, and will call the function call back
// when response is returned.
// the program will continue onto the next statement [line 24]

http.get('http://www.google.com/index.html', function (response) {
    console.log('Response Status:', response.statusCode);

    var body = '';

    // While data is received concat to body
    response.on('data', function (d) {
        body += d;
    });

    // on response end log the complete body
    response.on('end', function () {
        console.log('Body', body);
    });

}).on('error', function (err) {  // log error if it occurs
    console.log('Error:', err.message);
});

console.log('END PROGRAM');  //
