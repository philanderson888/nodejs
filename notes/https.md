# HTTPS

## Author

@philanderson888
November 2020

## Contents

- [HTTPS](#https)
  - [Author](#author)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Generate a certificate](#generate-a-certificate)
  - [Create server](#create-server)
  - [HTTPS Express Server](#https-express-server)

## Introduction

This aims to show the basics of building an https node web server

https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/

## Generate a certificate

We generate `key.pem` the private key and `cert.pem` the public certificate which matches this private key

firstly generate a private key

```powershell
choco install openssl -y
# generate RSA private key file `key.pem`
openssl genrsa -out key.pem
```
generates key.pem 

```js
/*
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAuVgIlt+y4V7n4DnMQetvcS/oipGcfglBU+qaRG5OOBMtn7EP
91kbdZO5bnoIn57sZX2VWNabq3XEfen4nQM1jyYW44NpmHnNisbgCQ==
-----END RSA PRIVATE KEY-----
*/
```

now request a certificate

```powershell
openssl req -new -key key.pem -out csr.pem
```

this generates

```js
/*
-----BEGIN CERTIFICATE REQUEST-----
MIIDEzCCAfsCAQAwgc0xCzAJBgNVBAYTAlVLMQ8wDQYDVQQIDAZMb25kb24xEDAO
wPmxOMtzl3N79LoVLCSGMFdTUVrfQOg=
-----END CERTIFICATE REQUEST-----
*/
```

now generate a certificate

```powershell
# generate cert.pem certificate 
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
# remove request file
rm csr.pem
```

cert.pem file

```js
/*
-----BEGIN CERTIFICATE-----
MIIEIzCCAwsCFBxncb3QkWgMsnHG1v/IOqhEArBLMA0GCSqGSIb3DQEBCwUAMIHN
QkOC1fTlag==
-----END CERTIFICATE-----
*/
```

## Create server

now create our server

```js
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
```

when we run with with `node server.js` we can see the page over `https://localhost.8000` although chrome warns us this is not a valid certificate ie has not been certified on the internet.

We can also get the data over curl

```powershell
curl -k https://localhost:8000
# serving data over https
```

## HTTPS Express Server

Here is a web server with routes over http and https using express, with cors and also with jsonwebtoken

```js
const fs = require('fs');
const http = require('http')
const https = require('https');
const express = require('express');
const cors = require('cors');
const privateKey = fs.readFileSync('key.pem');
const publicCertificate = fs.readFileSync('cert.pem');
const credentials = {
    key: privateKey,
    cert: publicCertificate
}
const expressJwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const jwtSecret = 'secret123';
const app = express();
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
const jwt = (request, response) => {
    const data = {
        token: jsonwebtoken.sign({user:'philanderson'},jwtSecret)
    }
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Request-Method','*');
    response.setHeader('Access-Control-Allow-Methods','OPTIONS,GET')
    response.writeHead(200,{'Content-Type':'application/json'});
    response.end(JSON.stringify(data));
}
const foods = [
    { id: 1, description: 'burritos' },
    { id: 2, description: 'quesadillas' },
    { id: 3, description: 'churos' }
];
const getFood = (request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Request-Method','*');
    response.setHeader('Access-Control-Allow-Methods','OPTIONS,GET')
    response.writeHead(200,{'Content-Type':'application/json'});
    response.end(JSON.stringify(foods));
}
app.get('/',homePage);
app.get('/jwt',jwt);
app.get('/getFood',getFood);
// now pages from here on down will require authentication!
app.use(expressJwt({secret:jwtSecret,algorithms:['HS256'] }));
const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials,app)
httpServer.listen(3001);
httpsServer.listen(3002);
console.log('http listening on 3001 and https on 3002');
/*
http://localhost:3001

{
"helloworld": "you are now receiving data over https"
}

http://localhost:3001/jwt

{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGhpbGFuZGVyc29uIiwiaWF0IjoxNjA1ODg5MjcyfQ.BiVyGc9BB1Q9D5HaMfCeewLNiSZTLmApng0xvaTY5mk"
}

https://localhost:3002/getFood


*/
```
