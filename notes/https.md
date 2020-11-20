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

