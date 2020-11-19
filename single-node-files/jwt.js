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