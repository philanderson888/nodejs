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

