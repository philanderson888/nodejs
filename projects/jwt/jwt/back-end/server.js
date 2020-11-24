const express = require('express');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors')
const app = express();
app.use(cors());
const foods = [
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
app.get('/',(request,response)=>{
    response.json({
        token: jsonwebtoken.sign({user:'philanderson'},jwtSecret),
        foods,
    })
});
app.get('/foods',(request,response)=>{
    response.json({
        foods,
    })
});
app.use(jwt({secret:jwtSecret,algorithms:['HS256'] }));
app.listen(3001);
console.log('Listening on 3001')