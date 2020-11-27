const fs = require('fs');
const http = require('http')
const https = require('https');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
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
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const url = process.env.MLabConnectionString;
const bcrypt=require('bcrypt');
const saltRounds = 10;
const app = express();
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json())
let userData = [];
const getUserData = async () => {
    MongoClient.connect(url,{useUnifiedTopology:true,retryWrites:false},(error,database) => {
        if(error) throw error;
        const usersDb = database.db('jwt-authentication-database-2020-11');
        const users = usersDb.collection('users');
        users.find({},{projection:{username:1,password:1,_id:0}}).toArray((error,user) => {
            userData = user;
            console.log(userData);
            database.close();
            return userData;
        })
    });
}
const homePage = (request,response) => {
    //response.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
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
const foodData = [
    { id: 1, description: 'burritos' },
    { id: 2, description: 'quesadillas' },
    { id: 3, description: 'churos' }
];
const foods = (request,response) => {
    const token = jsonwebtoken.sign({user:'philanderson'},jwtSecret)
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Request-Method','*');
    response.setHeader('Access-Control-Allow-Methods','OPTIONS,GET')
    response.setHeader('Authorization', `Bearer ${token}`)
    response.writeHead(200,{'Content-Type':'application/json'});
    response.end(JSON.stringify(foodData));
}
const users = (request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Request-Method','*');
    response.setHeader('Access-Control-Allow-Methods','OPTIONS,GET')
    response.writeHead(200,{'Content-Type':'application/json'});
    response.end(JSON.stringify(userData));
}
const signin = async (request,response) => {
    await getUserData();
    const { username, password } = request.body
    let salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password,salt);
    const user = {
        username,
        password
    }
    bcrypt.compareSync(password,hash);
    console.log(`password is`,password);
    console.log(`hash is`, hash)
    console.log(`use is ${JSON.stringify(user)}`);
    if (!username || !password) {
        response.send('not authorised')
        return response.status(401).end()
    }
    if(!userData.some(item => item.username === user.username && item.password === user.password)){
        response.send('not authorised')
        return response.status(401).end()
    }
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Request-Method','*');
    response.setHeader('Access-Control-Allow-Methods','OPTIONS,GET')
    const token = jsonwebtoken.sign({ user }, jwtSecret, {
        algorithm: 'HS256',
        expiresIn: jwtExpirySeconds,
    })
    response.setHeader('Authorization', `Bearer ${token}`)
    console.log(`Authorization header set as 'Bearer ${token}'`);
    response.cookie('token',token,{maxAge: jwtExpirySeconds * 1000, sameSite:'lax'});
    console.log(`response.cookie.lastVisit`,response.cookie.lastVisit);
    response.cookie('lastVisit',new Date().toISOString());
    //response.writeHead(200,{'Content-Type':'application/json'});
    response.send(userData);
}
const register = async (request,response) => {
    await getUserData();
    const { username, password } = request.body
    let salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password,salt);
    const user = {
        username,
        password
    }
    bcrypt.compareSync(password,hash);
    console.log(`password is`,password);
    console.log(`hash is`, hash)
    console.log(`use is ${JSON.stringify(user)}`);
    if (!username || !password) {
        response.send('please enter username and password')
        return response.status(401).end()
    }
    if(userData.some(item => item.username === user.username)){
        response.send('user already exists')
        return response.status(401).end()
    }
    MongoClient.connect(url,{useUnifiedTopology:true,retryWrites:false},(error,database) => {
        if(error) throw error;
        const usersDb = database.db('jwt-authentication-database-2020-11');
        const users = usersDb.collection('users');
        const user = {
            username,
            password,
        }
        users.insertOne(user)
            .then(result=>{
                console.log(`success! new id is ${result.insertedId}`)
                response.setHeader('Access-Control-Allow-Origin','*');
                response.setHeader('Access-Control-Request-Method','*');
                response.setHeader('Access-Control-Allow-Methods','OPTIONS,GET')
                const token = jsonwebtoken.sign({ user }, jwtSecret, {
                    algorithm: 'HS256',
                    expiresIn: jwtExpirySeconds,
                })
                response.setHeader('Authorization', `Bearer ${token}`)
                console.log(`Authorization header set as 'Bearer ${token}'`);
                response.cookie('token',token,{maxAge: jwtExpirySeconds * 1000, sameSite:'lax'});
                console.log(`response.cookie.lastVisit`,response.cookie.lastVisit);
                response.cookie('lastVisit',new Date().toISOString());
                //response.writeHead(200,{'Content-Type':'application/json'});
                user.insertedId = result.insertedId;
                response.send(user);
            }).catch(error => {
                console.log(`user not created`,error)
            })
    });
}
app.get('/',homePage);
app.get('/jwt',jwt);
app.get('/users',users);
app.post("/signin", signin)
app.post("/register", register)
// foods now requires a token
app.use('/',expressJwt({
    secret:jwtSecret,
    algorithms:['HS256'],
}));
app.get('/foods',foods);
// app.use('/',expressJwt({
//     secret:jwtSecret,
//     algorithms:['HS256'],
// }).unless({
//     path:[
//         '/',
//         '/jwt',
//         '/signin',
//         '/users',
//     ]
// }));
const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials,app)
httpServer.listen(3001);
httpsServer.listen(3002);
console.log('http listening on 3001 and https on 3002');