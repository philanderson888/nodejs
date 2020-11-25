const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

const { signIn, welcome, refresh } = require("./handlers")

const app = express()
app.use(bodyParser.json())
app.use(cookieParser())

app.post("/signin", signIn)
app.get("/welcome", welcome)
app.post("/refresh", refresh)
app.get('/',(request,response)=>{
    response.send(`Welcome`)
    return response.status(200).end()
})

app.listen(8000)
console.log('listening on port 8000')

/*
Note - this code works fine with Postman with the following

1. POST http://localhost:8000/signin with body raw {"username":"bob","password":"123"}

eyJ..

2. GET http://localhost:8000/welcome

Welcome

bob!

token -
eyJ..

payload - {"username":"bob","iat":1606318354,"exp":1606318414}

cookies -
{"token":"eyJ..."}

token cookie -
eyJh...


3. POST http://localhost:8000/refresh

Token has been refreshed
user bob

token -
eyJhb...


*/