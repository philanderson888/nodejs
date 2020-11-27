# HTTP

How can we see in detail what is inside an HTTP packet?

## Contents

- [HTTP](#http)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [References](#references)
  - [Headers](#headers)
  - [Adding fields](#adding-fields)
  - [Attaching files](#attaching-files)
  - [Cookie](#cookie)
  - [Download attachment](#download-attachment)
  - [Send data](#send-data)
  - [Redirect](#redirect)
  - [CORS](#cors)

## Introduction

Whenever we send or receive data over HTTP we are getting involved in a complex transaction which has many elements and has developed in complexity over the years, so it's good to have a clear understanding of what is going on underneath.

How can we visualise and see clearly what is going on?

## References

https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/

https://nodejs.org/api/http.html

- message.headers
- http.request

## Headers

headers are contained in the `rawHeaders` property

```js
response.rawHeaders
```

get and set headers

```js
response.set('Content-Type','text/html')
response.get('Content-Type')
```

## Adding fields

```js
response.append(field, value)
response.append(field, [array,of,values])
```

## Attaching files

response.attachment('myfile.jpg')

## Cookie

response.cooke(name,value,options)

## Download attachment

response.download('myfile.jpg')

## Send data

```js
response.status(200).json({field:'value'})
response.status(404).json()/send()/end()
// json values (also calls send() and end())
response.json({field:'value'})
// non-json values and also calls end()
response.send(buffer/string/object/array)
    - Buffer then `Content-Type` is `application/octet-stream`
// use this if we don't want to send any data!
response.status(404).end()
```

## Redirect

```js
response.redirect('/folder/path/')
response.redirect('http://domain.com')
```

## CORS

CLIENT-SIDE COMPONENT: “Hey browser, please call this API from https://somecoolapi.com

BROWSER: “Sure thing. Lemme ask.”. “Hmm, somecoolapi.com is a different domain than mytenant.sharepoint.com, where we are now. I should check first”; calls somecoolapi.com.

WEBSITE: “New domain, who dis?”

BROWSER: “Hey, someone from origin: mytenant.sharepoint.com would like to get access to your API. You can find out all about it in my OPTIONS HTTP headers.”

WEBSITE: “Sure, I don’t see any reasons why you shouldn’t be allowed. Here, let me give you some Access-Control-Allow-Origin headers to confirm I’m ok with it. Just make sure you only GET stuff, no POST or DELETEs, ok?”.

WEBSITE: “Awesome!”; Turns to user, “Good news! somecoolapi.com said they’ll do it!”.

WEBSITE: Makes request. Gets results. Returns results to user.

They lived happily ever after.

The End.

