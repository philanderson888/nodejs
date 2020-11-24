# Node Modules

## Contents

- [Node Modules](#node-modules)
	- [Contents](#contents)
	- [Introduction](#introduction)
	- [Include](#include)
	- [Require](#require)
	- [Core modules](#core-modules)
	- [Custom Module](#custom-module)
	- [Exporting](#exporting)
	- [NPM Modules](#npm-modules)
	- [OOP](#oop)
	- [new](#new)
	- [Global module](#global-module)
	- [Caching](#caching)
	- [npm init](#npm-init)
	- [npm config](#npm-config)

	

## Introduction

We import javascript from other files as `modules`

```js
// 'x' refers to a file called 'x.js'
var x = require('x')
```

## Include 

Include is optional

## Require 

Require is mandatory

Dependency requires mandatory `require`

```js
var x = require('./module_file_name');    
```

Once we include or require a file we can use anything defined explicitly for export

## Core modules

Core modules come with Node

User modules are installed	
	

## Custom Module

Can export string, array, object or function

```js
module.exports={};
var y=1;
function private1(){};
function private2(){};
exports.y=y;
exports.public1=private1;
exports.doThis=private1;
```

Use with

```js
var x = require('x')
x.public1();
```
	
	
## Exporting

```js
module.exports.a=a; 
module.exports.doThis = function(){
	return someValue;
} 
// use
var myModule = require ('myModule'); 
var a = myModule.a;
var result = myModule.doThis();
```						
		
## Export A Function

app.js

```js
const { signIn } = require("./handlers")
```

handlers.js

```js
const signIn = (req, res) => {
  res.end()
}

module.exports = {
  signIn
}
```
		
		
		
		
		
		
		
		
		
		
		
					
## NPM Modules

- Core
- User


		
## OOP

MODULES CAN BE USED LIKE CLASSES IN OOP

Use to create PUBLIC AND PRIVATE METHODS FOR CLASSES
	
MODULE FILE IS YOUR CLASS
		
FIELDS : PRIVATE OR PUBLIC (THROUGH 'EXPORT')

FUNCTIONS ARE YOUR METHODS : PRIVATE OR PUBLIC (THROUGH 'EXPORT')
			
PRIVATE BY DEFAULT
			
TO MAKE PUBLIC, MUST EXPORT USING 

```js
module.exports.module_name=function_name;
```

## new

New creates unique instances where values are not shared

```js
var x = new myObject() 
```

## Global module

Only install globally if you want to use it as a command line tool

https://nodejs.org/api/globals.html


## Caching

Modules are cached after first load


## npm init

```powershell
npm init 
```

```js
npm set init.author.name "Brent Ertz"
npm set init.author.email "brent.ertz@gmail.com"
npm set init.author.url "http://brentertz.com"
// prompt for email / password 
// create or verify a user in the npm registry saved in ~/.npmrc file
```

## npm config

https://docs.npmjs.com/cli/config

config files

- per-project config file (/path/to/my/project/.npmrc)
- per-user config file (~/.npmrc)
- global config file ($PREFIX/etc/npmrc)
- npm builtin config file (/path/to/npm/npmrc)

```js
npm config set `<key>` <value> [-g|--global]
npm config get `<key>`
npm config delete `<key>`
npm config list
npm config edit
npm get <key>
npm set `<key>` <value> [-g|--global]
// set npmrc in '~/.npmrc'
npm config set "phil=1"  
// set npmrc in '~\appdata\roaming\npm\etc\npmrc'
npm config set "phil=3" -g 
```					
		
## npm start

package.json1

```json
"scripts": {"start": "nodemon node_00_HelloWorld.js"}
```