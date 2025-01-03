# graphql

## contents

- [graphql](#graphql)
  - [contents](#contents)
  - [introduction](#introduction)
  - [documentation](#documentation)
  - [install](#install)
  - [02 express with graph ql](#02-express-with-graph-ql)
  - [add graphiQL](#add-graphiql)
  - [03 add ruru graphics](#03-add-ruru-graphics)
  - [04 using curl to reach the graphql server](#04-using-curl-to-reach-the-graphql-server)
  - [05 using a client](#05-using-a-client)

## introduction

## documentation

https://graphql.org/graphql-js/

## install

```js
npm init
npm install graphql --save
```

run with

```js
node server.js
```

see code at

[graph-ql-01](/projects/20-graph-ql/graph-ql-01/)

## 02 express with graph ql

```js
npm install express graphql-http graphql --save
```

again run with `node server.js` and go to `https://localhost:4000/graphql`

## add graphiQL

add graphic interaction with `ruru` package

```js
npm install --save ruru
```

we now see the graphic interface

<img src="/images/graph-ql-ruru.png" width="400" />

see code at

[graph-ql-02](/projects/20-graph-ql/graph-ql-02/)

## 03 add ruru graphics 

```js
npm install --save ruru 
```

now we can run a graphic query instead

<img src="/images/graph-ql-ruru-2.png" width="400" />

see code at

[graph-ql-03](/projects/20-graph-ql/graph-ql-03/)

## 04 using curl to reach the graphql server

```bash
curl -X POST \
-H "Content-Type: application/json" \
-d '{"query": "{ hello }"}' \
http://localhost:4000/graphql
# {"data":{"hello":"Hello world from Phil!"}}
```

we can also use `graphiql` and `postman` to send such queries

## 05 using a client

we can use a javascript client to send a post query

```js
fetch('http://localhost:4000/graphql', { 
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({ query: "{ hello }" }),
    })
    .then(r => r.json())
    .then(data => console.log("data returned:", data))
```

we run this with `node query.js` and get back

```json
data returned: { data: { hello: 'Hello world from Phil!' } }
```

see code at 

[graph-ql-05](/projects/20-graph-ql/graph-ql-05/)

