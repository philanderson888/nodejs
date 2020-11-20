const https = require('https');
const fs = require('fs')
const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
}
https.createServer(options,(request,response) => {
    response.writeHead(200);
    response.end("serving data over https\n");
}).listen(8000);
console.log('listening on port 8000');