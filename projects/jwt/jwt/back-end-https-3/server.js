const fs = require('fs');
const http = require('http')
const https = require('https');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const Cookies = require('cookies');
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
const jwtExpirySeconds = 100;
const app = express();
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json())
const keys = ['keyboard cat'];
const homePage = (request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Request-Method','*');
    response.setHeader('Access-Control-Allow-Methods','OPTIONS,GET')
    response.writeHead(200,{'Content-Type':'application/json'});
    const data = {
        helloworld:"you are now receiving data over https"
    }
    console.log(`cookies in request object from react client`,request.cookies)
    console.log(`cookies in response object being sent to react client`,response.cookies)
    
    const cookies = new Cookies(request,response,{keys});
    const lastVisit = cookies.get('LastVisit');
    cookies.set('LastVisit',new Date().toISOString());
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
const foodData = [
    { id: 1, description: 'burritos' },
    { id: 2, description: 'quesadillas' },
    { id: 3, description: 'churos' }
];
const foods = (request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Request-Method','*');
    response.setHeader('Access-Control-Allow-Methods','OPTIONS,GET')
    response.writeHead(200,{'Content-Type':'application/json'});
    response.end(JSON.stringify(foodData));
}
const userData = [
    { username: 'bob', password: '123' },
    { username: 'builder', password: '456' },
]
const users = (request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Request-Method','*');
    response.setHeader('Access-Control-Allow-Methods','OPTIONS,GET')
    response.writeHead(200,{'Content-Type':'application/json'});
    response.end(JSON.stringify(userData));
}
const signin = (request,response) => {
    const { username, password } = request.body
    const user = {
        username,
        password
    }
    console.log(`user ${JSON.stringify(user)}`);
    if (!username || !password) {
        response.send('not authorised')
        return response.status(401).end()
    }
    if(!userData.some(item => item.username === user.username && item.password === user.password)){
        response.send('not authorised')
        return response.status(401).end()
    }
    // response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
    response.setHeader('Access-Control-Request-Method','*');
    response.setHeader('Access-Control-Allow-Methods','OPTIONS,GET')
    const token = jsonwebtoken.sign({ user }, jwtSecret, {
        algorithm: 'HS256',
        expiresIn: jwtExpirySeconds,
    })
    response.cookie('token',token,{maxAge: jwtExpirySeconds * 1000, sameSite:'lax'});
    response.cookie('fromTheServer','here is a cookie from the server',{maxAge:200});
    const cookies = new Cookies(request,response,{keys});
    const lastVisit = cookies.get('LastVisit');
    console.log('lastVisit',lastVisit);
    cookies.set('LastVisit',new Date().toISOString());
    response.writeHead(200,{'Content-Type':'application/json'});
    console.log(`token sent as cookie at ${new Date()}`,token)
    console.log(`cookies in request object from react client`,JSON.stringify(request.cookies))
    console.log(`cookies in response object being sent to react client`,JSON.stringify(response.cookies));
    response.end(JSON.stringify(userData))
}

app.get('/',homePage);
app.get('/jwt',jwt);
app.get('/users',users);
app.post("/signin", signin)
app.get('/foods',foods);
// app.use('/',expressJwt({
//     secret:jwtSecret,
//     algorithms:['HS256'],
// }));
// foods now requires a token
app.use('/',expressJwt({
    secret:jwtSecret,
    algorithms:['HS256'],
    getToken: function fromCookie(request) {
        const token = request.cookies.token || request.body.token
        console.log(`trying to get a token in the application root path`,token)
        if(token) {
            return token;
        }
        return null;
    }
}).unless({
    path:[
        '/',
        '/jwt',
        '/signin',
        '/users',
    ]
}));
const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials,app)
httpServer.listen(3001);
httpsServer.listen(3002);
console.log('http listening on 3001 and https on 3002');