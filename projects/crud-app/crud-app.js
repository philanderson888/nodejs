const app = require('express')();
const http = require('http');
const fs = require('fs')
const path = require('path');
const axios = require('axios');

const hostname = '127.0.0.1';
const port8080 = 8080;
const port3000 = 3000;
const port3001 = 3001;
const port8000 = 8000;

app.get('/jsonResponse', (req,res) => {
    console.log(`\n\nrequest parameters in req.query ...`)
    console.log(`request.query parameter is ... `)
    console.log(req.query)
    if (req.query != undefined) {
        const name = req.query.name;
        console.log(`name ... ${name}`)
        res.json({name: name});
    }
});

app.get('/sendPostRequestToDemoApi', (req,res) => {

    console.log(`**** this is a duplicate of the one below - converge them ******`)

    console.log(`\n\nrequest parameters in req.query ...`)
    console.log(`request.query parameter is ... `)
    console.log(req.query)
    if (req.query != undefined) {
        const name = req.query.name;
        console.log(`name ... ${name}`)

        // send a demo post request
        const url = `https://jsonplaceholder.typicode.com/users`;
        const user = {name: name};  
        axios.post(url, user)
            .then(response => {
            //console.log(response);
            console.log(`data successfully POSTed to ${url} and received this response`)
            console.log(response.data)
            const id = response.data.id;
            res.json({
                description: "id " + id + " created at jsonplaceholder.typicode.com/user on POST { user }",
                id: id,
                name: name
            });
        });
    }
    
    
});

app.get('/sendPostRequestToJsonPlaceholder', (req,res) => {
    
    console.log(`**** this is a duplicate of the one above - converge them ******`)
    
    console.log(`request parameters in req.query ...`)
    console.log(`request.query parameter is ... `)
    console.log(req.query)

    if (req.query != undefined) {

        // send a post request
        const url = `https://jsonplaceholder.typicode.com/users` 
        console.log(`about to send a POST request to ${url}`)

        const name = req.query.name;

        const user = {
            name: name
        }
    
        // send a post request to fake internet api via axios
        axios.post(url, user)
            .then(response => {
                console.log(response.data)
                const id = response.data.id
                console.log(`name ... ${name} ... id .. ${id}`)
                res.json(
                    { 
                        description: 'This obtains new user ID = ' + id + ' from POSTing user to https://jsonplaceholder.typicode.com/users',
                        name: name,
                        id: id                    
                    }
                );
            });        
    }
    
    
});

app.get('/sendPostRequestToNetlifyExpressApi02', (req,res) => {

    console.log(`request parameters in req.query ...`)
    console.log(`request.query parameter is ... `)
    console.log(req.query)

    if (req.query != undefined) {
        const url = `https://netlify-express-serverless.netlify.app/.netlify/functions/json-post-01` 
        console.log(`about to send a POST request to ${url}`)
        const name = req.query.name;
        const user = {
            name: name
        }   
        console.log(`send a post request to hosted netlify api via axios`)
        axios.post(url, user)
            .then(response => {
                console.log(response.data)
                const id = response.data.id
                console.log(`name ... ${name} ...`)
                res.json(
                    { 
                        description: 'This obtains response from POSTing user to',
                        description2: 'https://netlify-express-serverless.netlify.app/.netlify/functions/json-post-01',
                        name: name
                    }
                );
            });        
    }   
});

app.get('/', (req,res) => {
    console.log(`nodejs responding on port ${port8080} with response.sendFile`)
    console.log(`__dirname is ${__dirname}`)
    const filePath = path.join(__dirname + `/index.html`)
    console.log(`serving html file from path ${filePath}`)
    res.sendFile(filePath);
});

const server3000 = http.createServer((req,res) => {
    console.log(`\n\nrequest received on port ${port3000}`)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`This is a plain text response from an http web server built in native nodejs`);
});

const server3001 = http.createServer((req,res) => {
    console.log(`\n\nrequest received on port ${port3001}`)
    console.log(`request parameters in req.query ...`)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h3>NodeJS api on port 3001 returns static HTML</h3><ul><li>home</li><ul><li><a href="http://localhost">http://localhost</a></li></ul></ul><ul><li>json</li><ul><li><a href="http://localhost/jsonResponse">http://localhost/jsonResponse => {     }</a></li><li><a href="http://localhost/jsonResponse?name=phil">http://localhost/jsonResponse?name=phil --> {  name : phil  }</a></li></ul><li>plain text</li><li>html</li></ul>`);
});


server3000.listen(port3000, hostname, () => {
    console.log(`json server sending index.html at http://${hostname}:${port3000}`)
});

server3001.listen(port3001, hostname, () => {
    console.log(`node server sending raw html at http://${hostname}:${port3001}`)
});

console.log(`node express app running on port 8080`)
app.listen(port8080);


setTimeout(() => {
    console.log(`\nshutting down servers on ports 3000 and 3001 and express app on port 8080 after delay of 30 seconds`)
    server3000.close();
    server3001.close();
    app.close();
}, 1000 * 60 * 0.5);



/*
    fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseAsJson => console.log(responseAsJson));
*/