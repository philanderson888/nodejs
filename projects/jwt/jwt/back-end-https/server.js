const https = require('https');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const credentials = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}
app.use(cors());
const homePage = (request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Request-Method','*');
    response.setHeader('Access-Control-Allow-Methods','OPTIONS,GET')
    response.writeHead(200,{'Content-Type':'application/json'});
    const data = {
        helloworld:"you are now receiving data over https"
    }
    response.end(JSON.stringify(data));
}
const httpsServer = https.createServer(credentials,homePage)
httpsServer.listen(443);
console.log('listening on 443 for https secure requests')