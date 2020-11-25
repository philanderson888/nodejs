# Node with JWT

## Author

@philanderson888
November 2020

## Contents

- [Node with JWT](#node-with-jwt)
  - [Author](#author)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Back End in Node!](#back-end-in-node)
  - [Install back end](#install-back-end)
  - [JWT token](#jwt-token)
  - [Authorization Headers](#authorization-headers)
  - [basic](#basic)
  - [bearer](#bearer)
  - [API key](#api-key)
  - [digest](#digest)
  - [OAuth](#oauth)
  - [AWS](#aws)

## Introduction

Goal is to have a back-end with JWT tokens and a react front end storing those tokens

## Back End in Node!

Following this tutorial https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81

## Install back end

```powershell
yarn add express express-jwt jsonwebtoken cors
```

server.js

```js
const { response } = require('express');
const express = require('express')
const app = express();
const data = {field:"value"};
app.get('/',(request,response)=>{
    response.json(data)
});
app.listen(3000);
console.log('Listening on 3000')
/*
http://localhost:3000

{
"field": "value"
}
*/
```

So we have our api data appearing

## JWT token

We can generate a JWT token with the following

```js
const express = require('express');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const app = express();
const data = [
    { id: 1, description: 'burritos' },
    { id: 2, description: 'quesadillas' },
    { id: 3, description: 'churos' }
  ];
const jwtSecret = 'secret123';
app.get('/jwt',(request,response)=>{
    response.json({
        token: jsonwebtoken.sign({user:'philanderson'},jwtSecret)
    })
})
app.use(jwt({secret:jwtSecret,algorithms:['HS256'] }));
app.get('/',(request,response)=>{
    response.json(data)
});
app.listen(3000);
console.log('Listening on 3000')
/*
http://localhost:3000/jwt
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGhpbGFuZGVyc29uIiwiaWF0IjoxNjA1ODEwMTY3fQ.8Kt5hl5KGZd1f8RdQllZhqNl6XFtmtLnv_QdddbEIgc"
}
*/
```

## Authorization Headers

These contains the credentials to log in

Some are

- basic
- bearer
- API key
- digest auth
- OAuth 2.0
- Hawk
- AWS Signature

## basic

The base64 string reads `username:password` and is treated as plain text except if https is used

```json
{
Authorization: Basic AXVubzpwQDU1dzByYM==
}
```

## bearer

```json
{
    Authorization: Bearer <token>
}
```

## API key

either in url

```
GET /endpoint?api_key=abcdefgh123456789
```

or in a header

```json
{
    X-API-Key: 11234
}
```

## digest

```json
{
    Authorization: Digest username=”admin” Realm=”abcxyz” nonce=”474754847743646”, uri=”/uri” response=”7cffhfr54685gnnfgerg8”
}
```

## OAuth

individual to provider

## AWS

```json
{
    Authorization: AWS4-HMAC-SHA256 Credential=abc/20200618/us-east-1/execute-api/aws4_request, SignedHeaders=host;x-amz-date, Signature=c6c85d0eb7b56076609570f4dbdf730d0a017208d964c615253924149ce65de5
}
```