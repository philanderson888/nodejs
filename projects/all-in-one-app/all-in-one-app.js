const http = require('http');
var fs = require('fs')
var path=require('path');
var app = require('express')();

const hostname = '127.0.0.1';
const port80 = 80;
const port3000 = 3000;
const port3001 = 3001;
const port8000 = 8000;

app.get('/jsonResponse', (req,res) => {
    console.log(`request parameters in req.query ...`)
    console.log(`request.query parameter is ... `)
    console.log(req.query)
    if (req.query != undefined) {
        const name = req.query.name;
        console.log(`name ... ${name}`)
        res.json({name: name});
    }
});


app.get('/', (req,res) => {
    console.log(`nodejs responding on port ${port80} with response.sendFile`)
    console.log(`__dirname is ${__dirname}`)
    const filePath = path.join(__dirname + `/index.html`)
    console.log(`serving html file from path ${filePath}`)
    res.sendFile(filePath);
});

const server3000 = http.createServer((req,res) => {
    console.log(`request received on port ${port3000}`)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`This is a plain text response from an http web server built in native nodejs`);
});

const server3001 = http.createServer((req,res) => {
    console.log(`request received on port ${port3001}`)
    console.log(`request parameters in req.query ...`)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h3>NodeJS web server examples</h3><ul><li>json</li><ul><li><a href="http://localhost:8000">http://localhost:8000 => {     }</a></li><li><a href="http://localhost:8000?name=phil">http://localhost:8000?name=phil --> {  name : phil  }</a></li></ul><li>plain text</li><li>html</li></ul>`);
});


server3000.listen(port3000, hostname, () => {
    console.log(`json server sending index.html at http://${hostname}:${port3000}`)
});

server3001.listen(port3001, hostname, () => {
    console.log(`node server sending raw html at http://${hostname}:${port3001}`)
});

console.log(`node express app running on port 80`)
app.listen(port80);