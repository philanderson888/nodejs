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

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvYiIsImlhdCI6MTYwNjMxODQyMSwiZXhwIjoxNjA2MzE4NDgxfQ.pj8idVyv_9uQnnO-5Swvf40NJayJxWK6xFuB1Gi1_zg

2. GET http://localhost:8000/welcome

Welcome

bob!

token -
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvYiIsImlhdCI6MTYwNjMxODM1NCwiZXhwIjoxNjA2MzE4NDE0fQ.lqGK90aCz97OsUjknsFIJczpgChoxH1qs9vZySAmNLQ

payload - {"username":"bob","iat":1606318354,"exp":1606318414}

cookies -
{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvYiIsImlhdCI6MTYwNjMxODM1NCwiZXhwIjoxNjA2MzE4NDE0fQ.lqGK90aCz97OsUjknsFIJczpgChoxH1qs9vZySAmNLQ"}

token cookie -
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvYiIsImlhdCI6MTYwNjMxODM1NCwiZXhwIjoxNjA2MzE4NDE0fQ.lqGK90aCz97OsUjknsFIJczpgChoxH1qs9vZySAmNLQ


3. POST http://localhost:8000/refresh

Token has been refreshed
user bob

token -
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvYiIsImlhdCI6MTYwNjMxODM5NiwiZXhwIjoxNjA2MzE4NDU2fQ.n5J-RnqkijJWIj4YcCKtMZ2cSJONI03zxQe-fdcik4I!


*/