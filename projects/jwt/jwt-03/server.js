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