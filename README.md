# Node 

A tutorial workspace for learning NodeJS

*Note - need to eliminate duplicate work in the \notes folder*

## Contents

- [Node](#node)
	- [Contents](#contents)
	- [Introduction](#introduction)
	- [Node Documentation](#node-documentation)
	- [Node Video Tutorials](#node-video-tutorials)
	- [NODE LABS](#node-labs)
	- [Node documentation](#node-documentation-1)
	- [NODE : Overall Philosophy and BIG PICTURE](#node--overall-philosophy-and-big-picture)
	- [Node and Express History](#node-and-express-history)
	- [First Tasks](#first-tasks)
	- [Installing node](#installing-node)
	- [Updating Node](#updating-node)
	- [NPM Node Package Manager](#npm-node-package-manager)
		- [How popular is a package?](#how-popular-is-a-package)
		- [Node Environment Variables](#node-environment-variables)
	- [RUNNING A NODE FILE](#running-a-node-file)
	- [Node Debugging](#node-debugging)
	- [MIDDLEWARE](#middleware)
	- [Node Modules](#node-modules)
	- [Core Modules](#core-modules)
		- [Lodash  for Arrays, Numbers, Strings](#lodash-for-arrays-numbers-strings)
	- [STDIN : GETTING RAW INPUT FROM THE USER](#stdin--getting-raw-input-from-the-user)
	- [RUNNING NODE WITH PARAMETERS](#running-node-with-parameters)
	- [REFERENCING FILES](#referencing-files)
	- [PATH MANAGEMENT TO REACH FILES IN NODE](#path-management-to-reach-files-in-node)
	- [EXTRA : NODE PROCESS.CWD](#extra--node-processcwd)
	- [The Callback Pattern](#the-callback-pattern)
	- [FS MODULE : FILE SYSTEM](#fs-module--file-system)
	- [FS.STATS](#fsstats)
	- [NODE-GLOB : SEARCH](#node-glob--search)
	- [NODE-WALK : SEARCH](#node-walk--search)
	- [Processes](#processes)
	- [PS-NODE](#ps-node)
	- [Creating Child Processes](#creating-child-processes)
	- [Media](#media)
	- [play-sound](#play-sound)
		- [Speaking Text](#speaking-text)
	- [Logging](#logging)
	- [MongoDB](#mongodb)






## Introduction
	

What is Node.js?

Create

	Website
	
	Chat App
	
	Game
	
	Good for REAL TIME
	
	Node is FAST AND EFFICIENT WHEN REAL TIME IS IMPORTANT
	
	
Standalone JS virtual machine (V8)

	FIRST EVER PRESENTATION ON NODE BY RYAN DAHL THE CREATOR
	
		https://www.youtube.com/watch?v=ztspvPYybIY
		
	Can run straightforward Javascript on your machine as a normal application 
	
	Engine is written by Google for Chrome and is called V8 engine 
	
		Source at https://chromium.googlesource.com/v8/v8.git
	
	Open source 
	V8 is Google's open source JavaScript engine.
	
	V8 implements ECMAScript as specified in ECMA-262.
	V8 is written in C++ and is used in Google Chrome, the open source browser from Google.
	V8 can run standalone, or can be embedded into any C++ application.
	
	
	
	
	
	
Node can be used to create local applications ie using general programming 
	Can run straightforward Javascript on your machine as a normal application
	At it's core, Node.js is a stripped-down, highly customizable server engine -- a proto-server, if you will -- because out of the box it doesn't do anything until you set it up. 
	
	This proto-server processes in a loop, ready to accept and respond to requests. 
	
	Any of those requests themselves may initiate other requests to some other part of the system, such as to read a file off of disk or to send a signal to spin a motor on a robot arm. 
	
	That loop, known as the event loop, is the "runtime" part.
	
	
	
	
	
	
	
MOST BASIC : RUNS STANDALONE JAVASCRIPT PROGRAMS
NODE is written in C 
NODE allows you to write a JAVASCRIPT SERVER without learning C 
REASONS TO USE NODE
	STANDARD WEB SERVER (NO NODE)
	
		STANDARD WEB SERVER CAN GET BY WITHOUT NODE.  
		CAN USE EG FORMS WITH POST REQUESTS TO HANDLE DATA LINKED TO PHP
		
		
		
		
		
PROBLEMS WITH AJAX AND JSON ENCODING TO AND FROM PHP 

	THREADS : EACH PHP REQUEST CAN REOPEN CONNECTION TO DATABASE.  
	JSON_ENCODE(php array)
	
	EVAL(JSON)  
	
	Solution : NODE is pure Javascript end-to-end without a need for a translator 
		
	ELEGANT TO HAVE JAVASCRIPT SEND AND RECEIVE DATA 
	
	
	
	ISOMORPHIC : SAME CODE RUNNING ON CLIENT AND SERVER
	
	
	
Purpose of NODE
	NODE is often called EVENTED JAVASCRIPT OR EVENTED I/O
		
	PROBLEM : MULTI-THREADED NATURE OF AJAX REQUESTS 
			NEW PROCESS
			
			NEW THREAD
	NODE DOESN'T HAVE THREADS COMPETING
		
	UNUSED NODE RESPONDERS ARE SLEEPING IE PARKED IN RAM BUT NOT CONSUMING CPU RESOURCES
	
	
	
	
STRENGTHS OF NODE 
	NODE IS BEST SUITED TO MICRO-EVENTS IE EVENTED I/O IE QUICK COMMUNICATION 
	
	NODE USES EVENT-LOOP MODEL ISSUES ONE EVENT WHEN PROCESSING OF CALLBACK FUNCTION HAS FINISHED (READY TO START NEXT REQUEST) AND USES ONLY ONE THREAD TO HANDLE MULTIPLE REQUESTS!!!  NODEJS.ORG/ABOUT  TO READ MORE
	
	KEY POINT : NODE USES ONLY ONE THREAD TO HANDLE ALL APPLICATION REQUESTS !!! 
	
	Node is SCALABLE 
	- AVOIDS CREATING NEW THREADS SO QUICK RESPONSE 
		
		REQUEST
			
				CPU CYCLES 1/2/3/4
				
				PARKS REQUEST (WAIT CALLBACK)
				
		NEXT REQUEST
		
	NON-BLOCKING - WAIT FOR CALLBACK AND GET ON WITH OTHER TASKS WHILE WATING
			
		
	Event-driven Programming.
		WAIT FOR CALLBACK 
		
			CALLCACK ARRIVES : CALL FUNCTION REQUESTED WITH PARAMETERS INCLUDED IN THE CALLBACK INCLUDING ERRORS
			
		STREAMS ETC : CAN INCLUDE THEIR OWN I/O EVENTS EG ON('DATA') OR ON ('FINISH') WHICH SIGNIFIES THERE IS MORE DATA TO SEND OR DATA HAS FINISHED SENDING
	
Event Loop.
	Always running
	
	Illustration of a checkout cashier taking orders (calling functions) then serving the next customers and taking their orders also.  When the order is ready the cashier will deliver the order (callback) to the calling function with any paramters, so the callback function can execute also now.
	
	
	
		
	
PRACTICAL APPLICATIONS
	DATA STREAMING OF LIVE FILES EG LIVE VIDEO FEED STREAMING.  PROCESS DATA AS IT ARRIVES
	
	Sending Data : Node uses JSON 
		
				
		JSON has created NOSQL with Mongo and Couch
		
	
	
Node Package Manager
	Library of modules to use with Node 
	The Node Package Manager is included with Node.js and has grown to a repository of nearly 50,000 packages
	
	Code is shared under MIT licence which is not restrictive 
	
	
	
	
	
Minimalist Modules
	Anyone can create a module (entry barrier is low)
	
	Most modules perform a small, minimalist function 
	
		PACKAGES ARE COMBINATIONS OF MODULES : LIST IN PACKAGES.JSON FILE FOR COMPILING YOUR PROJECT 
		
		
		
	
	
REASONS TO AVOID NODE  
		100% CPU TASKS : WILL BLOCK THE SINGLE THREAD SO NO NEW REQUESTS WILL BE ACCEPTED 
		
		SINGLE THREAD SO SINGLE CORE ONLY.  IF YOU WANT MULTI CORE YOU CAN USE MULTIPLE NODE THREADS, OR USE CLUSTERING WHICH CREATES CHILD PROCESSES.
		
		
		

		
## Node Documentation

	
Node documentation 
	
		https://nodejs.org/api/
		
	Getting Started (possibly out of date by now)
	
		http://blog.simonwillison.net/post/57956855516/node	
	Good all-round reference for basics
		https://docs.nodejitsu.com/articles/advanced/buffers/how-to-use-buffers
	
	NPM
	
		https://www.npmjs.com/
		
		https://docs.npmjs.com/
		
	
	ALL NODE RESOURCES ON INTERNET!
	
		http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js
		
		
		
		
## Node Video Tutorials

		
13 minutes   	https://www.youtube.com/watch?v=pU9Q6oiQNd0
		
http://gaurassociates.com/#/nodejs/10
	
JSONP
	https://www.youtube.com/watch?v=GcHWqyzSCc8
NODE University
    http://node.university/courses
Youtube free courses
	Node Intro
    https://www.youtube.com/watch?v=U8XF6AFGqlc - 24 minutes - total beginners - Node from scratch - Traversy Media
	Node Express
    https://www.youtube.com/watch?v=gnsO8-xJ8rs 1 hour 24 minutes - beginner from scratch - Traversy Media
		
 
 
 
 
 
 ## NODE LABS

Install Node
Check the version of Node and NPM
Add NODE to your PATH
REPL : TYPE 'NODE' AND ENTER SOME JAVASCRIPT SEPARATED BY SEMICOLONS TO EXECUTE A TRIVIAL APP.
CONSOLE LOG HELLO WORLD
STDOUT HELLO WORLD
DEBUG : RUN NODE DEBUG <MYFILE.JS> AND OBSERVE OUTPUT.  TYPE REPL TO GET TO A COMMAND PROMPT TO VIEW AND SET VARIABLE VALUES.
NODE-INSPECTOR : INSTALL NODE INSPECTOR GLOBALLY WITH NPM INSTALL NODE-INSPECTOR -G 
NODE-INSPECTOR : RUN AN APP WITH NODE-DEBUG <MYAPP.JS>.   SET BREAKPOINTS AND RUN THE APP OBSERVING BREAKPOINTS IN CHROME.  SET VALUES TO WATCH AS WELL.
STDIN ONE CHARACTER AND CONSOLE.LOG('YOU ENTERED THE CHARACTER' + CHARACTER)
READLINE : READ ONE LINE OF TEXT AND OUTPUT
PROMPT : PROMPT FOR A VALUE AND CONSOLE.LOG THE VALUE ENTERED
CWD : DISPLAY THE CURRENT WORKING DIRECTORY FOR YOUR NODE APPLICATION
ENV.PATH : DIPLAY  THE CONTENTS OF YOUR PROCESS.ENV.PATH ARRAY
PATH.SEP MODULE : RUN A NODE APPLICATION AND STDOUT PATH.SEP (SEPARATOR CHARACTER)
PATH.DIRNAME : DISPLAY THE DIRECTORY NAME OF A FILE
PATH.BASENAME : DISPLAY THE FILE NAME OF A FILE
PATH.EXTNAME : DISPLAY THE EXTENSION OF A FILE
ARGV : START A NODE APPLICATION WITH ARGUMENTS AND DISPLAY THOSE ARGUMENTS USING THE ARGV ARRAY
OPTIMIST OR YARGS : START A NODE APPLICATION WITH A REQUIRED NAMED ARGUMENT AND CONSOLE.LOG OUT THE VALUE OF THAT ARGUMENT
OPTIMIST : START A NODE APPLICATION AND DETECT IF AN ARGUMENT IS PRESENT (TRUE) OR ABSENT (FALSE).  JUST USE ONE LETTER TO REPRESENT THE ARGUMENT.  EG NODE MYAPP.JS S WILL DETECT THAT S=TRUE
TASKKILL : CREATE A PROCESS EG RUN WORDPAD.  TASKLIST TO FIND PROCESS ID.  TASKKILL TO KILL THAT PROCESS FORCEFULLY.  <<Linux run TOP to get processes and KILL to kill that process>>
TASKKILL : CREATE A PROCESS EG RUN WORDPAD.  TASKLIST TO FIND PROCESS ID.  USE NODE TO TERMINATE THE APPLICATION FORCEFULLY.  <<Linux run TOP to get processes and KILL to kill that process>>
CREATE A MODULE TEST1.JS
EXPORT A FIELD FROM THIS MODULE FIELD1.JS.  GIVE THE FIELD A VALUE.
REQUIRE MODULE TEST1.JS FROM TEST2.JS.  CONSOLE.LOG THE VALUE SET ABOVE.  CHANGE THE VALUE AND CONSOLE.LOG THE NEW VALUE ALSO.
SHARED VALUE : CREATE TEST3.JS AND READ AND MODIFY THE SAME VALUE. 
READ FILE SYNCHRONOUSLY AND DISPLAY CONTENTS
READ FILE ASYNCHRONOUSLY AND DISPLAY CONTENTS
READ FILE WITH STREAMING AND DISPLAY CONTENTS
FS.STAT : CONSOLE.LOG FS.STAT DETAILS ON A FILE
FS.ACCESS : CHECK WE HAVE ACCESS TO A FILE USING FS.ACCESS.  LOG AN ERROR.
FS.ACCESS : CHECK WE HAVE ACCESS TO A FILE USING FS.ACCESS.  LOG SUCCESS.
WRITE DATA TO A FILE SYNCHRONOUSLY THEN READ IT BACK AND DISPLAY THE CONTENTS
WRITE DATA ASYNCHRONOUSLY TO A FILE.  IN THE CALLBACK IE WHEN THE WRITE IS COMPLETE, READ THE FILE CONTENTS BACK ASYNCHRONOUSLY.  WHEN THE READ IS COMPLETE, IN THE CALLBACK DISPLAY THE FILE CONTENTS USING CONSOLE.LOG TO THE SCREEN.
WRITE DATA TO  A FILE USING FILE STREAMING.  IN THE CALLBACK WHEN THE WRITE IS COMPLETE THEN READ THE DATA BACK USING STREAMING.  IN THE CALLBACK, ONCE THE READ IS COMPLETE THEN DISPLAY THE CONTENTS USING CONSOLE.LOG.
READ JSON DATA FROM A FILE AND DISPLAY RAW JSON DATA ON THE SCREEN
READ JSON DATA FROM A FILE AND EXTRACT A KEY VALUE PAIR FROM THE DATA AND DISPLAY THE KEY AND THE VALUE ON THE SCREEN
WRITE THE CURRENT DATE AND TIME STAMP TO A TEXT FILE, THEN READ THE CONTENTS BACK AND DISPLAY IT ON THE SCREEN.
APPEND THE CURRENT DATE AND TIME (USE CREATEWRITESTREAM WITH {FLAGS:'A'}) TO A TEXT FILE THEN READ THE ENTIRE TEXT FILE BACK AND DISPLAY IT ON THE SCREEN.
ASYNC : CAN WE READ TWO FILES ASYNCHRONOUSLY IN PARALLEL. LOG EACH READ INDIVIDUALLY ONCE COMPLETE.   ONLY ONCE BOTH FILES HAVE BEEN READ LOG A SUCCESS.  
HTTP SERVER : DISPLAY HELLO WORLD
HTTP SERVER : READ JSON FROM A TEXT FILE SYNCHRONOUSLY AND DISPLAY IT ON A WEB PAGE
HTTP SERVER : READ JSON ASYNCHRONOUSLY AND DISPLAY IT ON A WEB PAGE.  HOWEVER THE FILE IS NOT TO BE FOUND SO INSTEAD OF DISPLAYING DATA, CATCH THE ERROR IN THE ERROR HANDLER AND DISPLAY AN APPROPRIATE 'FILE NOT FOUND' MESSAGE BACK ON THE USER'S WEB PAGE
HTTP SERVER : READ DATA FROM A FILE ASYNCHRONOUSLY AND DISPLAY IT ON A PAGE
	
HTTP SERVER : READ DATA FROM A FILE USING STREAMING AND DISPLAY IT ON THE USER PAGE
	
HTTP SERVER : READ DATA FROM A FILE USING STREAMING AND PIPE THE RESPONSE TO THE USER
BUFFER : CREATE A BUFFER OF 8 BYTES LONG
BUFFER : CREATE A BUFFER AND FILL IT WITH ZEROS.  READ THE CONTENTS OF A BUFFER AND DISPLAY WITH STDOUT
BUFFER : CREATE A BUFFER AND WRITE CONTENT TO IT.  READ AND DISPLAY THE BUFFER.
HTTP SERVER : SEND RAW HTML TO THE USER WHICH DISPLAYS A FORM WITH ONE BUTTON.  WHEN THE BUTTON IS CLICKED CONSOLE.LOG 'A GET REQUEST HAS BEEN RECEIVED'
HTTP SERVER : SEND RAW HTML TO THE USER WHICH DISPLAYS A FORM WITH ONE BUTTON.  WHEN THE BUTTON IS CLICKED CONSOLE.LOG 'A POST REQUEST HAS BEEN RECEIVED'
HTTP SERVER : SEND RAW HTML TO THE USER WHICH DISPLAYS A FORM WITH ONE FIELD EG ID AND ONE BUTTON. WHEN THE FORM IS SUBMITTED EXTRACT THE ID FROM THE GET REQUEST AND CONSOLE.LOG 'GET REQUEST RECEIVED : ID HAS A VALUE OF XX'
HTTP SERVER : STREAM A HTML PAGE TO THE USER WHICH DOES THE SAME.
HTTP SERVER : SEND A FORM TO THE USER WITH ONE FIELD AND ONE BUTTON.  WHEN THE FORM IS SUBMITTED, SUBMIT IT USING THE 'METHOD=POST' METHOD.  AT THE SERVER, CONSOLE.LOG 'POST REQUEST RECEIVED : ID HAS A VALUE XX'
HTTP SERVER : SEND A FORM TO THE USER.  WHEN USER SUBMITS THE FORM, APPEND A TIMESTAMP TO A TEXT FILE.  
NODE PROJECT : CREATE A NODE PROJECT FOLDER AND RUN NPM INIT TO GENERATE A PACKAGE.JSON FOLDER.  
MEMWATCH : CAN YOU GENERATE AN EVENT WHICH WILL, OVER A PERIOD OF 20 SECONDS OR MORE, INCREASE GRADUALLY THE MEMORY USAGE OF YOUR APPLICATION?  CAN YOU LOG THE MEMORY HEAP SIZE AS YOU GO, SAY LOG SOMETHING EACH SECOND?  CAN YOU GET A LEAK TO TRIGGER WHICH REQUIRES CONSECUTIVE GROWTH OVER 20 SECONDS?
FOREVER : START 3 NODE APPLICATIONS WITH FOREVER THEN STOP THEM AGAIN.  WHAT HAPPENS IF YOU MANUALLY TASKKILL ONE OF THE APPLICATIONS - DOES FOREVER AUTOMATICALLY START IT AGAIN?
PM2 : REPEAT THE ABOVE WITH PM2
EXEC : CAN YOU CREATE A CHILD PROCESS WHICH PAUSES FOR 2 SECONDS THEN COMMUNICATES IN SOME WAY WITH THE PARENT PROCESS?  PARENT WILL LISTEN FOR CHILD.ON('CLOSE') EVENT TO BE SURE CHILD HAS TERMINATED.
SPAWN : CAN YOU SPAWN A CHILD PROCESS WHICH STDOUT SOME DATA TO THE PARENT WHICH GETS LOGGED?
EVENT EMITTER : CAN YOU CREATE A LISTENER WHICH LISTENS FOR A PARTICULAR EVENT CALLED 'SHOUT'?  CREATE AN EVENT EMITTER WHICH EMITS 'SHOUT' EVENTS EVERY SECOND AND DETECT THEM.
EVENT EMITTER : LISTEN FOR TWO EVENTS SHOUTQUIET AND SHOUTLOUD.  EMIT AND DETECT BOTH EVENTS.
EMIT.ONCE : EMIT AN EVENT TWICE BUT DETECT IT ONLY THE FIRST TIME WITH 'ONCE' METHOD
GENERATE AN EXPRESS APP WITH HOGAN TEMPLATING
GENERATE AN EXPRESS APP WITH JADE TEMPLATING
GENERATE AN EXPRESS APP WITH EJS TEMPLATING
RUN DIFF IN LINUX OR FC FILE COMPARE IN WINDOWS TO COMPARE LINE-BY-LINE TWO FILES  Diff file1 file 	FC FILE1 FILE2
POWERSHELL : GET SIZE OF FOLDER       ls -r | measure -s length
LAB 36 : STDIN
LAB 32 : READLINE
LAB 30 : ARGV
LAB 40 OPTIMIST
LAB 42 OPTIMIST TRUE/FALSE
LOOK AT 19 PATH
LAB 60 : not working
LAB 65 PROCESS.ENV.PATH
CREATE A BUFFER
DISPLAY A BUFFER 
FILL A BUFFER
READSTREAM
WRITESTREAM
READSTREAM AND PIPE INTO WRITESTREAM
READSTREAM AND PIPE INTO STDOUT AS WELL AS WRITESTREAM
DEMO MYSQL LAB
TALK ABOUT MEAN
=  FUTURE LABS =
		
FOREVER
WINSTON
EXPRESS PASSPORT
ASYNC PARALLEL
ASYNC SERIAL
DOMAIN ON ('ERROR')
LOGGER
EXCEPTIONS
SESSION
COOKIE
PROMISE
AWAIT
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
## Node documentation

NODE SITE
	
	https://nodejs.org/api/
	
NPM SITE
	
	Search within node for keyword : https://www.npmjs.com/browse/keyword/hash
		
		
		
		
		
		
		
		
		
	
		
## NODE : Overall Philosophy and BIG PICTURE

Introduction 
	WHAT IS IT 
	
	WHY SHOULD WE USE IT
	
	BENEFITS 
	
	COMPETITORS
	POPULARITY
	
	SPIN-OFF TECHNOLOGIES NOW UNDER ITS UMBRELLA 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

## Node and Express History

NODE 2009

NPM NODE PACKAGE MANAGER 2011

Node for Windows 2012
Node 6.11 Stable
Node 8 latest
Express 2010
Express 4 current

Intro

	
	FIRST EVER PRESENTATION ON NODE BY RYAN DAHL THE CREATOR
	
		https://www.youtube.com/watch?v=ztspvPYybIY
	
	INTENDED AS A MINI - OPERATING SYSTEM TO RUN IN BROWSER 
	
		TAKEN THIS SAME ENGINE (GOOGLE V8 OPEN SOURCE) AND RUN ON PC INSTEAD OF IN BROWSER SO CAN NOW RUN JAVASCRIPT ON PC AS APPLICATION RATHER THAN INSIDE (ORIGINAL INTENDED) BROWSER 
	
	V8 FAST BECAUSE IT COMPILES STRAIGHT TO MACHINE CODE, NO MIDDLEMAN WITH BYTE-CODE ETC.
	
	CLOCK CYCLES TO PERFORM A TASK : LATENCY OR DELAY
	
		http://blog.mixu.net/files/2011/01/io-cost.png
		
		
			L1 CACHE 3 CYCLES
			L2 CACHE 14
			RAM 250
			DISK 41 MILLION
			NETWORK 240 MILLION
	
	
	
	TAKES REQUESTS 
	
			SENDS OFF REQUEST 
			
			AWAITS CALLBACK 
			
			WHILE WAITING, SERVES OTHER REQUESTS 
			
			CALLBACK ARRIVES - EXECUTE CALLBACK FUNCTION ALSO 
			
			Picture of fast-food restaurant cashier  continually serving customers while others actually do the work of the tasks set eg preparing the meals behind the scenes and bagging up the meals ready to serve.  When the meal is 'ready' the cashier simply delivers the package to the waiting customer, again with little or no downtime (CPU time) for the cashier (process)
		
	ALWAYS RUN THE LATEST VERSION OF NODE AND JAVASCRIPT ON YOUR SERVER : DON'T HAVE TO WAIT FOR USERS TO UPDATE THEIR CLIENT!  YOU ARE THE ONE IN CONTROL OF THE JAVASCRIPT ON YOUR SERVER.
		
	USED IN
	
		GOOGLE MAPS
		GMAIL
		TWITTER
		FACEBOOK
		GITHUB
		
	USED TO READ
	
		MONGODB
		COUCHDB
		
	DANGERS
	
		SINGLE THREADED SO CAN CRASH ALL APPS 
	
			PERSISTENT STATE OF APPLICATION -> REDIS DATABASE !!!
			
			Redis is a data store well suited to handling simple data that doesn't need to be stored for long-term access, such as instant messages and game-related data. Redis stores data in RAM, logging changes to it to disk. The downside to this is that storage space is limited, but the advantage is that Redis can perform data manipulation quickly. If a Redis server crashes and the contents of RAM are lost, the disk log can be used to restore the data.
			
			AUTO REBOOT WITH FOREVER.JS 
			
			
	
	SINGLE THREAD
	
		PM2
		
		FOREVER 
		
			MONITOR ALL PROCESSES
			RECOVER NODE IF CRASH
		
			RECOVER
			
				REDIS : DATABASE IN RAM TO TRANSACT ALL LOGS SO IF RECOVER NODE THEN CAN RECOVER ALL TRANSACTIONS
	
	
	
	
## First Tasks
	
	

	INSTALL NODE 
	
	INSTALL NPM 
	
	RUN 'NODE' COMMAND 
	
	RUN INTERACTIVE JAVASCRIPT 
	
		F12 IN BROWSER
		
		REPL IN NODE
	
	WRITE 'HELLO WORLD' NODE MODULE AND RUN IT 
	
	DEBUG THAT MODULE TO PAUSE IT 

	CREATE A WEB SERVER : FIRST BASIC HTTP WEB SERVER ON LOCALHOST:8080 
	
	
	
	
	

## Installing node

Note - npm is auto installed when node is installed 
Install node in all 3 versions 
https://code.tutsplus.com/tutorials/build-a-todo-api-with-node-express-and-mongodb--cms-29343
Npm init -y       creates default npm init 
Npm cache verify (also now is the recommended way to verify the cache is clear)
Npm cache clean --force (now not recommended)
	
			
Running commands to test your installation
	node -v                	VERSION
	
	node  					INTERACTIVE MODE 
		process   returns details about the process that is running 
		
		




Verifying Node Version

    npm -v.

Install latest

    npm install npm@latest -g.

 
			
			
## Updating Node

```js
# npm upgrade
npm install -g npm
```

		
		
Installing Node On Windows

https://nodejs.org/en/download/  
		
	Download and run!
			
After install files live at 
	
			C:\Program Files\nodejs\node.exe
			C:\Program Files\nodejs\npm.cmd
	
		ECLIPSE
		
			HELP=>ECLIPSE=>MARKETPLACE=>SEARCH=>ENIDE STUDIO OR NODECLIPSE
		
			FILE=>NEW=>PROJECT=>NODE.JS
Installing Node On MAC
			
https://nodejs.org/en/download/  
		
	Download and run!
Installing Node on Ubuntu

https://github.com/nodesource/distributions#debinstall
		
  sudo apt-get update 
		Sudo apt-get upgrade
		Sudo apt-get dist-upgrade
		Sudo apt-get install apache2
		Web Browser : http://<IP> should now work!
		sudo apt-get install curl
		curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
		sudo apt-get install -y nodejs                (-y = Yes)
		
		Optional: install build tools
		To compile and install native addons from npm you may also need to install build tools:
		sudo apt-get install -y build-essential
		
		sudo apt-get install npm 
		
		sudo npm -g install http
		
		Check nodejs install files at 	/usr/lib/nodejs 	
		Check node modules at 			/usr/lib/node_modules or
		/usr/local/lib/node_modules 
	
UBUNTU 15.10 : INSTALL NODE (VERSION 2 USING CURL)
	curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
	sudo apt-get install -y nodejs 
	
	nodejs -v               (TEST INTALL eg returns v5.7.0) 
	
	npm -v                   (TEST NPM VERSION EG v3.6.0) 
	
UBUNTU 15.10 : CREATE TEST NODE 
	mkdir test
	cd test 
	npm init 
	
	
	
	Path on Linux Debian
		export PATH=$PATH:/usr/local/bin
		export NODE_PATH=$NODE_PATH:/usr/local/lib/node_modules
			
			
UBUNTU : TEST NODE IS WORKING 
		
		To test an installation is working (and that the setup scripts are working!) use:
		
		1) link nodejs to node
		
		sudo ln -s /usr/bin/nodejs /usr/local/bin/node
		
		2) 
		
		curl -sL https://deb.nodesource.com/test | bash -
		
			
	Linux
		./configure
		make
		sudo make install
	
	
INSTALL FROM SOURCE CODE 
	https://github.com/nodejs/node
	
	http://shapeshed.com/compiling-nodejs-from-source-on-ubuntu-10-04/
	
	
		 By default Node.js will be installed to /usr/local/bin/node and npm will be installed to /usr/local/bin/npm.
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	
	
INSTALL NPM NODE PACKAGE MANAGER
	Windows : bundled together with Node 
	
		https://www.npmjs.com/package/npm
		
		Windows : npm installed by default with node at 
	
			C:\Program Files\nodejs\node.exe
			C:\Program Files\nodejs\npm.cmd
		
		
		
	Apple :  bundled together
	
		https://www.npmjs.com/package/npm
		
		
	
	
How to Update Node and NPM
	New versions of Node and NPM come out frequently. To install the updates, just download the installer from the Nodejs.org site and run it again. The new version of Node and NPM will replace the older versions.
	
	
	
	

## NPM Node Package Manager

### How popular is a package?

[https://www.npmtrends.com/](https://www.npmtrends.com/)

### Node Environment Variables

```jsx
Must start with REACT_APP_ or VUE_APP_ etc

process.env.NODE_ENV is set to `development` or `test` or `production` in a build

```

	
	
	
	
	
		
	
 
		 
		 
		 
		 
		 
		 
		 
		 
		 	 
		 
		 
		 
		 
RUNNING NODE IN THE COMMAND LINE : REPL READ EVAL PRINT LOOP 
	from https://nodejs.org/api/repl.html
	
	Can run REPL as STANDALONE or WITHIN OTHER MODULES
	
	USE FOR DEBUGGING AND TESTING
	
	RUN : JUST TYPE 'NODE' TO ENTER COMMAND LINE INTERFACE
	
	a = [ 1, 2, 3];
	[ 1, 2, 3 ]
	> a.forEach(function (v) {
	...   console.log(v);
	...   });
	1
	2
	3
	
	
	
	
	
	
		
	Read - Reads user's input, parse the input into JavaScript data-structure and stores in memory.
	Eval - Takes and evaluates the data structure
	Print - Prints the result
	Loop - Loops the above command until user press ctrl-c twice.
	
	
	(Persistence can be provideed by a database eg Redis)
	
	
		
	
	
## RUNNING A NODE FILE 
	node <NODE_FILE.JS>    WILL RUN A NODE FILE !!!
	
	
	process.exit();        will TERMINATE YOUR APPLICATION 
	
	TO LAUNCH A NODE APPLICATION FROM ANOTHER NODE OR JAVASCRIPT FILE
	SEE node_57 lab files 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
	
	
## Node Debugging

	
THERE ARE SEVERAL WAYS TO RUN NODE DEBUGGING
    
Nodemon

		RELOAD YOUR NODE SERVER AFTER SOURCE FILE CHANGE 
		
		https://www.npmjs.com/package/nodemon
		
		http://nodemon.io/
		npm install nodemon 
		
		Once installed, can run (express) apps using
			1) nodemon  by itself
			2) nodemon myapp.js
			3) nodmeon myapp
		
			WILL WATCH FOR CHANGE ON MAIN FILE BUT ALSO ALL SUB-FILES 
		
		
			
						
    
Chrome LiveReload : AUTO-REFRESH BROWSER ON SOURCE FILE CHANGES

		JUST A TIMESAVER!!!
		
		BROWSER WILL REFRESH AFTER A FEW SECONDS EVERY TIME A 'WATCHED' FOLDER  CHANGE
		
		
			http://livereload.com/ 
			
			WITH CHROME EXTENSION 
			https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en
			
			
			
			
		OTHER ALTERNATIVES TO LIVERELOAD
							
			SYNC BROWSER AFTER CHANGE  	
				https://www.browsersync.io/
				npm install -g browser-sync
				browser-sync start --server --files "css/*.css"
			LIVE JS : REFRESH Browser	
					
					http://livejs.com/
	
	BUILT IN NODE DEBUGGER
	
		JUST RUN NODE DEBUG MYAPP WHICH WILL PAUSE ON ANY DEBUGGER BREAKPOINTS WHICH YOU HAVE MANUALLY SET IN THE CODE
		1. node debug node_debug_02.js
				GOING TO http://localhost:5858 shows basic debugging information; not
						very helpful in this instance
		2. CODE PAUSES AT LINE 1
		3. c to continue the script  (lower case c for continue)
		4. CODE WILL PAUSE AT LINE 2 WHERE debugger statement is placed
		5. Press c again
		6. Code will now finish
		See node_debug_03.js
		  
		  
		NOTE YOU CAN GET THE PROGRAM TO IGNORE ALL DEBUGGING BY JUST RUNNING
		  		node node_debug_03.js
		BREAKPOINTS
			SET WITH debugger; command or using the port 5858 debugger			  
		  
		When code breaks can then use these commands 
			c = CONTINUE 
			
			n = NEXT = STEP 
			
			s = STEP IN 
			
			o = STEP OUT  
			
			REPL  open command line to inspect values  ((note : in Windows you cannot recover back to the application - you would have to restart application))
			
			
			pause - Pause running code (like pause button in Developer Tools)
			
			setBreakpoint(), sb() - Set breakpoint on current line
			
				sb(5);  SET BREAKPOINT ON LINE 5 
			clearBreakpoint, cb(...) - Clear breakpoint
			
			watch(x) - Add x to watch list
		
	DEBUGGING WITH NODE-INSPECTOR AND NODE-DEBUG
		1. NPM INSTALL -G NODE-DEBUG 
			THIS WILL INSTALL     NPM INSTALL -G NODE-INSPECTOR
		2. node-debug myapp.js
		3. Wait about 20 seconds for the page http://localhost:8080/debug?port=5858 to open up and refresh the debug data.
		You will be able to set breakpoints etc and view all the output from all of the variables.
			node-debug node_debug_05_http_server.js ***
			
			
			
			
			
			
			
			
		
		
		
		
	
DEBUGGING WITH CONSOLE.LOG
	See  https://developer.mozilla.org/en-US/docs/Web/API/Console/info
	
	console.error('error message);
	console.warn('warning message');  
	console.info('x')  displayed with blue 'i' info button
	console.assert(assertion) => Log if assertion is false  eg console.assert(false,'hi');
	console.group('message')  indents further logs until groupEnd
	console.groupEnd() 
	console.groupCollapsed  same as group but content is hidden unless clicked 
	console.count()
	console.count('label')
	console.table(["a","b","c"])
	console.time('ID');  finished by console.timeEnd('ID');
	Equivalent of string.format
	
		console.log("x is %d and y is %d", 1,2);
	
	
	
	
	
	
	
DEBUGGING WITH COLOUR 
	Get colours in your node output console for easier spotting of debugging 
	
	https://www.npmjs.com/package/colors
	npm install colors 
	
	
		see node_00_HelloWorld.js
		
		
		var util=require("util");
		var colors = require("colors");
		var x = 10;
		console.log(colors.green(x));
		debugger;
		setTimeout(function(){
			console.log(colors.red("Hello World"));
			console.log(colors.inverse("WOW"));
			console.log(colors.rainbow("WOW"));
		},2000);
	
	
DEBUG : EXTRA NOTES
DEBUGGING WITH NODE-INSPECTOR 
	https://docs.nodejitsu.com/articles/getting-started/how-to-debug-nodejs-applications
	
	https://spin.atomicobject.com/2015/09/25/debug-node-js/
	
	http://jlunaquiroga.blogspot.co.uk/2014/06/debug-in-nodejs.html
	
	http://www.100percentjs.com/best-way-debug-node-js/
	INSTALL 
	
		npm install node-inspector -g 
		
	START
	
		Open a command prompt and type
		
			node-inspector
	
	VIEW IN BROWSER
	
		Visit http://127.0.0.1:8080/debug?port=5858 to start debugging.
		Or http://localhost:8080/?port=5858 will work also
	THEN RUN YOUR APPLICATION WITH 
		
	With node inspector running in other terminal you have to start in debug mode your application with the following command:
	nodemon --debug node_debug_05_http_server.js
			or --debug-brk
	
	debugger listening on port 5858
			CAN NOW DEBUG AT http://127.0.0.1:8080/debug?port=5858 
			
			
			
	
	
WEBSTORM BUILT IN DEBUGGING
	FIND NODE FILE AND EITHER RUN OR RUN WITH DEBUG
	https://www.jetbrains.com/webstorm/help/running-and-debugging-node-js.html
DEBUGGING WITH DEBUG MODULE
	see requiring the debug module in express_04 application which can be run using nodemon express in that folder
	
	https://www.npmjs.com/package/debug
		
	INSTALL
	
		NPM INSTALL DEBUG 
		
	REQUIRE
	
		var debug = require('debug')('http')
		
	OUTPUT
		
		debug('MY MESSAGE HERE', my-variable-here);
		
	RUN APPLICATION
	
		set DEBUG=* & node <myapp.js> 
		set DEBUG=* & npm start 
		set DEBUG=express:* & npm start 
		set DEBUG=express:router & npm start
		
	OUTPUT WILL BE 
		
		http MY MESSAGE HERE <value of my-variable-here>
							
							
		
		
		
DEBUGGING WITH DEVTOOL
	NPM INSTALL -G DEVTOOL
	
	https://mattdesl.svbtle.com/debugging-nodejs-in-chrome-devtools
	
	
	
EXPRESS DEBUGGING

DEBUG logging is TURNED OFF BY DEFAULT
DEBUG logging can be TURNED ON BY THE FOLLOWING:
On MacOS or Linux, run the app with this command:
	DEBUG=myapp:* npm start
			
On Windows, use this command:
	set DEBUG=myapp:* & npm start
	SET DEBUG=* & node node_55_express.js
RUN FULL DEBUGGING
	
	SET DEBUG=EXPRESS:* & NODEMON APP_NAME
		
RUN MINIMAL DEBUGGING
	
	SET DEBUG=APP_NAME:* & NODEMON APP_NAME
		
RUN WITH NODEMON
	
	NODEMON --DEBUG APP_NAME
		
		Or
		
	NODEMON DEBUG APP_NAME   ** RUNS IT PROPERLY
	
http://expressjs.com/en/guide/debugging.html
	
DEBUGGING WITH NODE-INSPECTOR

	NODE-DEBUG NODEMON APP_NAME (SEE BELOW)
ONCE RUNNING, THE DEBUGGER WILL NOW OUTPUT COMMANDS SET WITH THE 'DEBUG' KEYWORD 
	 var debug = require('debug')('app_name:server');
	
	 debug ('output this as text');
	
DEBUGGING TIME ELAPSED
	CAN BE USEFUL TO ADD A TIME ELAPSED FUNCTION TO YOUR DEBUGGING
	
	DO THIS BY ADDING 
	"+NNNms" 
	
	From <https://www.npmjs.com/package/debug> 
	
	
DEBUGGING WITH NODE-DEBUG / NODE-INSPECTOR
NPM INSTALL -G NODE-DEBUG
NPM INSTALL -G NODE-INSPECTOR
https://www.npmjs.com/package/node-debug
THEN RUN APPLICATION WITH 
	NODE-DEBUG .\bin\www 
	
	NODE-DEBUG NODEMON APP_NAME
	
	TO OPEN A PAUSED COPY OF YOUR APPLICATION READY TO RUN, PAUSED BEFORE LINE 1 HAS STARTED READY TO PRESS 'CONTINUE' TO CONTINUE THE APP, AT HTTP://LOCALHOST:5858
	
	
NODE INSPECTOR
INSTALL
	NPM INSTALL -G NODE-INSPECTOR
	
COMMAND LINE
	NODE-INSPECTOR
	
BROWSER
	
	http://localhost:8080/debug?port=5858
	
DEBUGGING
INSTALL NODE INSPECTOR
RUN NODE INSPECTOR
OPEN BROWSER AT PORT 5858
RUN YOUR APP
	1) NODE APP.JS    
	2) NODE --DEBUG APP.JS     this starts the site but not the node inspector
	3) NODE DEBUG APP.JS
	4) NODEMON DEBUG .\bin\www    THIS TRIGGERS IT BUT PROVIDES A LOT OF EXTRA CODE RUNNING IN THE DEBUGGER
	
DEBUGGING
INSTALL NODE INSPECTOR
RUN NODEMON --DEBUG .\BIN\WWW
RUN NODE-INSPECTOR
VISIT 5858 DEBUG SITE
DEBUGGING WITHOUT NODEMON
RUN NODEMON DEBUG .\BIN\WWW
STEP THROUGH LINES IN COMMAND PROMPT ETC 
REPL TO VIEW VARIABLES
RUNNING EXPRESS
NODEMON EXPRESS WILL RUN YOUR APP IF YOU ARE IN THE RIGHT FOLDER
NODEMON .\BIN\WWW ALSO WILL RUN YOUR APP
		
DEBUGGING SUMMARY
Console.log WILL ALWAYS LOG
Require('debug')  and debug('message')  WILL ONLY LOG WHEN  --debug used
NODE-INSPECTOR CAN BE USED TO DEBUG AS IN CHROME WHEN EG WEB APP RUNS
CAN USE DEBUG INSTEAD OF --DEBUG
TOOLS TO AUTO-START NODE AFTER CRASH - forever and pm2

		
		
Forever - Restart After Crash

EVERYONE IS USING ONE THREAD SO ONE EXCEPTION WHICH REACHES
THE TOP OF THE STACK CAN CRASH EVERYONE'S APPLICATION! 
RESTART WITH 'FOREVER' (AND FOREVER-MONITOR) 
	https://www.npmjs.com/package/forever
	https://github.com/foreverjs/forever-monitor
	http://expressjs.com/en/advanced/pm.html
		
	RESTART NODE SERVER AFTER CHANGE OR CRASH 
	https://github.com/foreverjs/forever
		
	http://www.slidequest.com/q/70ang
		
	https://github.com/foreverjs/forever-monitor
		
	Forever, developed by nodejitsu, has functions to create applications that are always running—"forever" running. 
	If the application dies, forever brings it back. 
	It has built-in functionality to monitor processes. 
	It also offers an API you can use to incorporate its features into your own code.
		
	INSTALL 
		npm -g install forever
		
		npm install forever-monitor      
		
				LOCAL IF NEED TO USE FOREVER FROM NODE APP
	RUN YOUR APP WITH FOREVER 
		forever start myapp.js
		
	STOP
		forever stop myapp.js
		
	WHAT IS RUNNING
		forever list
		
		
	RUN FOREVER LIKE NODEMON TO AUTO-RESTART APP AFTER CODE CHANGE
		forever -w start myapp.js
		
		
		
			
			
			
						
PM2 - Restart After Crash

	PM2 stands for 'Process Manager' 
		
	http://expressjs.com/en/advanced/pm.html
			
	https://github.com/Unitech/pm2
			
	INCLUDED AS PART OF NODE CORE
		npm install pm2 -g
	Same as forever ie keeps code running even after crash
	https://github.com/Unitech/pm2
	START
	
		pm2 start myapp.js
		
			pm2 start app.js -i 4 START 4 INSTANCES IN CLUSTER MODE
		
	STOP
	
		pm2 stop myapp.js
		
	LIST pm2 PROCESSES
	
		pm2 list
		
	RAM AND CPU USAGE OF EACH PROCESS
	
		pm2 monit
		
	ADD MODULES
	
		pm2 install <MODULE>
		
	UPDATE
	
		pm2 update
		
	
	DETAIL ON ONE PROCESS
	
		pm2 show app.js    DETAIL ON ONE APP
	
	
	LOGS
	
		pm2 logs
	
		
				
		
## MIDDLEWARE

	Express adds extra functionality to your web server called 'middleware' which basically does extra tasks other than deliver files to users.
	
	Examples of middleware functions
		logger request logger with custom format support
		csrf Cross-site request forgery protection
		compress Gzip compression middleware
		basicAuth basic http authentication
		bodyParser extensible request body parser
		json application/json parser
		urlencoded application/x-www-form-urlencoded parser
		multipart multipart/form-data parser
		timeout request timeouts
		cookieParser cookie parser
		session session management support with bundled MemoryStore
		cookieSession cookie-based session support
		methodOverride faux HTTP method support
		responseTime calculates response-time and exposes via X-Response-Time
		staticCache memory cache layer for the static() middleware
		static streaming static file server supporting Range and more
		directory directory listing middleware
		vhost virtual host sub-domain mapping middleware
		favicon efficient favicon server (with default icon)
		limit limit the bytesize of request bodies
		query automatic querystring parser, populating req.query
		errorHandler flexible error handler
	Middleware is basically any software that sits between your application code and some low level API. 
	
	Express extends the built-in HTTP server functionality and adds a plugin framework. 
	
	Middleware is software which gets executed by the request handler before the response is sent back
	
		==> REQUEST IN 
		
				HANDLER RUNS
				
				==> MIDDLEWARE IS CALLED 
						
				==> RESPONSE IS SENT 
						
	
	http://expressjs.com/en/guide/using-middleware.html	
	
		
	http://expressjs.com/en/guide/writing-middleware.html
		
	
	http://evanhahn.com/understanding-express/
	
	
		
		Middleware functions are functions that have access to 
		
			- the request object (req)
			
			- the response object (res)
			
			- and the next middleware function in the application's request-response cycle.   
			  The next middleware function is commonly denoted by a variable named next.
		
	Middleware functions can perform the following tasks:
		Execute any code.
		Make changes to the request and the response objects.
		End the request-response cycle.
		Call the next middleware in the stack.
	
			
	MIDDLEWARE MUST END THE REQUEST AND RESPONSE CYCLE, OR CALL NEXT() 
	
		If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
	
	
	
	Warning : most middleware is no longer bundled with Express and must be installed separately
Node Modules and NPM

Anatomy of a module.
Private code.
Accessing and using modules.
npm commands.
package.json.
	
	


## Node Modules

[node-modules](notes/node-modules.md)				
				
				
	
		
	
	
		  
		
		
		
##  Core Modules 

	Express 
		
		Framework 
		
	Redis 
	
		ALTERNATIVE DATABASE TO MONGO 
		
		High availability database EG replication and clustering 
		
		PROVIDES PERMANENT PERSISTENCE FOR EG NODE IF IT GOES DOWN 
		
		http://redis.io/
		
		http://redis.io/clients#nodejs
		
		WRITTEN IN C, RUNS IN RAM , < 1MS LATENCY, BUILT-IN DATASTRUCTURES, LIKE LIST/SET/SORTED SETS
				/HASHES/
				
				
		REDISLABS.COM 
		
		
		HOW TO SET UP AN EXPRESS SESSION WITH PERSISTENT REDIS FOR SESSION DATA
			
			http://blog.modulus.io/nodejs-and-express-sessions
		
		
	COLLECTIONS : FOR WORKING WITH ARRAYS AND LISTS ETC 
	
	
		http://www.collectionsjs.com/
		
	



### Lodash  for Arrays, Numbers, Strings

lodash library for creating a foreach loop in JS

[https://lodash.com/](https://lodash.com/)

Either use with CDN

<script src="lodash.js"></script>

or via
install on NPM

$ npm i --save lodash

Then require in your
project

var _ = require('lodash');

Then can
use for example

_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });

// → { 'a': 1, 'b': 2 }

_.partition([1, 2, 3, 4], n => n % 2);

// → [[1, 3], [2, 4]]

See
documentation

[https://lodash.com/docs/4.17.10](https://lodash.com/docs/4.17.10)









	Underscore 
	
		useful for array manipulation eg groupby 
		
	Winston 
	
		LOGGING
		
		
		
	Bull 
	
		USE FOR PERSISTENT LOGGING EG ACROSS MULTIPLE SERVERS 
		
		https://github.com/OptimalBits/bull
		
		
		
	Bunyan : Logging properly using Node bunyan module 
		https://github.com/trentm/node-bunyan/
	
		LOG TO FILE OR OTHER SERVER 
	
		
		
	BLOCKED
	
		CHECKS THAT NO PROCESS IS BLOCKING YOUR SINGLE THREAD 
	
		https://www.npmjs.com/package/blocked
		
			TASK TAKES X SECONDS TO COMPLETE 
	
			TRIGGER ALERT / EMAIL IF X EXCEEDED 
	GULP
	
		AUTO BUILD SYSTEM
		
		http://gulpjs.com/
		
		
		
	GRUNT - automate the building of your system 
		http://gruntjs.com/
		
		
		
		
	Login 
		http://passportjs.org/docs	
		
	
	PDF Generator
		http://pdfkit.org/
	Benchmark : Time Your Application 
		https://github.com/substack/node-ben
	
	Loader.js  auto-loads modules 
	
		https://github.com/pinf/loader-js
		
	
	
	RequireJS : auto load modules 
	
		http://requirejs.org/
		
		
		
	CommonJS
	
		forces modules to declare their output values as module.exports.
		Single syntax for all modules 
		
		Conditional loading of modules 
	
	
	ASYNC MODULE CAN BE USED TO EXECUTE CALLBACKS
	
		IN 
		
			PARALLEL
			
			SERIAL (CHAINED)
			
			..OTHER WAYS EG WATERFALL
			
			
			
			
			
```js
		var async = require('async');		
				
		async.parallel([
			function(){ ... },
			function(){ ... }
		], callback);
		 
		 
		async.series([
			function(){ ... },
			function(){ ... }
		]);
		
		async.waterfall([
			function (callback) {
				getSomething(options, function (err, result) {
					if (err) {
						callback(new Error("failed getting something:" + err.message));
						// we should return here 
					}
					// since we did not return, this callback still will be called and 
					// `processData` will be called twice 
					callback(null, result);
				});
			},
			processData
		], done)
		
```
		
	
	
	
	
AUTOSTART Node servers at system startup
	Windows
	
		SCHEDULED TASK - STARTUP 
		
		CREATE A SERVICE TO RUN THE APPLICATION 
		
	https://www.npmjs.com/package/node-windows
	
	Easy version at 
	
	http://stackoverflow.com/questions/20445599/auto-start-node-js-server-on-boot
		
	npm install -g qckwinsvc
	
	Installing your service:
	> qckwinsvc
	prompt: Service name: [name for your service]
	prompt: Service description: [description for it]
	prompt: Node script path: [path of your node script]
	Service installed
	Uninstalling your service:
	> qckwinsvc --uninstall
	prompt: Service name: [name of your service]
	prompt: Node script path: [path of your node script]
	Service stopped
	Service uninstalled
		
		
Node AutoStart : Linux 
	Ubuntu
		
		http://kvz.io/blog/2009/12/15/run-nodejs-as-a-service-on-ubuntu-karmic/
								
				
PM2 : Check out script capabilities to create a script to start PM2 at server startup
	http://pm2.keymetrics.io/docs/usage/startup/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
			
				
	
## STDIN : GETTING RAW INPUT FROM THE USER 
	https://docs.nodejitsu.com/articles/command-line/how-to-prompt-for-command-line-input
	
	STDIN   INPUT
	STDOUT  OUTPUT 
	
	Paused by default 
	
	process.stdin.resume();
	
	process.stdin.on('data',function(text){
		
		
			
		
	});
	
	node_36_stdin.js
	node_37_stdin.js 
	
	
	
		
Getting user input - readline 
	https://nodejs.org/api/readline.html
	
	We can read data into our application 'live' using 'readline' module 
	
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	rl.question('Please type something', (answer) => {
		console.log('Thank you ' + answer);
	});
	
	node_32_readline.js 
	node_33_readline.js
	node_34_readline.js 
		
	Create a permanent listener
	
			rl.on('line',(myText)=> }
				// CODE WHEN USER PRESSES ENTER 
			}
				
		node_35_readline.js 
		
		
		
	Prompt : see 38 and 39
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
## RUNNING NODE WITH PARAMETERS


	ARGV : HOLDS THE ARRAY OF PARAMETERS PASSED TO THE APPLICATION 
	EG NODE MYFILE.JS A B C 
	
		process.argv[] array holds the following 
		
		process.argv[0] is NODE EXECUTABLE 
		
		process.argv[1] is NODE APPLICATION 
		
		process.argv[2] is FIRST PARAMETER PASSED 
		
		process.argv[3] is SECOND PARAMETER PASSED 
		
		
	node_30_argv_parameters.js 
	
	
	
	ARGV HOLDS [NODE,JAVASCRIPT FILE,PARAMETERS]
	
	 $ node node_30_argv_parameters.js one two three four five
	 [ 'C:\\Program Files\\nodejs\\node.exe',
	   'c:\\OneDrive\\PC\\showcase\\node_30_argv_parameters.js',
	   'one',
	   'two',
	   'three',
	   'four',
	   'five' ]
	   
	   
		
		
		
		
		
		
		
		
		
		
PASSING NAMED PARAMETERS AS ARGUMENTS TO A NODE EXECUTABLE
	Optimist	
	
		https://github.com/substack/node-optimist
		
		
	Optimist 
	
		http://stackoverflow.com/questions/14213345/what-is-the-use-of-optimist-module-in-node-js
		
		
		var argv = require('optimist').argv;
		
		if (argv.rif - 5 * argv.xup > 7.138) {
		  console.log('Buy more riffiwobbles');
		}
		else {
		  console.log('Sell the xupptumblers');
		}
		
		
		
		// call a function by hand 
		node node_40_optimist.js --parameter1="hello world"
		
		
		// call a function with parameters from code 
		
		$ ./xup.js --rif=55 --xup=9.52
		Buy more riffiwobbles
		$ ./xup.js --rif 12 --xup 8.1
		Sell the xupptumblers
		
		
		
		SHORT ARGUMENTS  -X 
		
			var optimist = require('optimist');
			var argv = optimist.argv;
			console.log("x is %d and y is %d", argv.x, argv.y);
		
		To run this type node node_41_optimist.js -x 10 -y 11
		
		node_41_optimist.js
		
		
		
		
		
		BOOLEAN ARGUMENTS
		
			if(argv.s){
				console.log('s is true');
			}
			if(argv.t){
				console.log('t is true');
			}
		
		run with node node_42_optimist.js -st 
		
		
		
		
		
		NON-HYPHENATED OPTIONS 
		
			JUST ADD TO ARGV ARRAY AS STRINGS OR NUMBERS 
			
			
			node node_43_optimist.js -st -x 10 -y 11 --parameter1="parameter1" hello this is some extra text 
			
			
		
		DEFAULT
			var optimist=require('optimist');
			var argv=optimist.default('x',10).default('y',10).argv;
			console.log("x is " + argv.x + " and y is " + argv.y);
			node_44_optimist.js 
			
		
		
		DEMAND (FIELDS ARE REQUIRED)
		
			var optimist=require('optimist');
			var argv=optimist.demand(['x','y']).argv;
			console.log("x is " + argv.x + " and y is " + argv.y);
		
		
			node_45_optimist.js 
			
			
			
	See YARGS and MINIMIST ALSO
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
## REFERENCING FILES 

	REFERENCE A FILE IN THIS DIRECTORY WITH ./
	
	REFERENCE A FILE IN SUBDIRECTORY WITH FOLDER/FILE 
	
	REFERENCE A FILE IN HIGHER DIRECTORY WITH ../
	
	ABSOLUTE PATH C:\X\Y\Z.HTM 
	
	RELATIVE PATH IS FROM THE BASE OR ROOT DIRECTORY OF OUR PROJECT 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
## PATH MANAGEMENT TO REACH FILES IN NODE 
	
```JS
Path Module 
	var path = require('path');
	Used for working with all file paths in NODE
	
	/ and \ both used 
	
	path.sep ==> separator character being used ie \ or /
	
		sep will automatically use the correct separator character depending on the operating system you are using
			
		
		var parentFolder = "parentFolder";
		var childFolder = "childFolder";
		var totalFolderPath = parentFolder + path.sep + childFolder;
		node_19_path_module.js
			
		
	path.normalise 
	
		will change your path string to reflect the correct path.sep separator character depening on your operating system ie Windows or Linux 
		
		path.normalise(your_path_here);
		
				return your path string with		orrect version of \ or / depending Windows (\) or linux (/)
		
		
	path.dirname =>    	Folder path to file 
	File Name Minus Extension
	
		path.basename(fileName,extension);
	
	path.extname ==> 	file extension name 
	
		fileName="C:\\folder\\folder\\file.exe";
		path.extname(fileName);
		
		
		
	
	__dirname  ==> Full directory name of the JAVASCRIPT FILE WHICH IS CURRENTLY RUNNING 
	
	__filename ==> FULL PATH AND FILENAME OF THE JAVASCRIPT FILE WHICH IS CURRENTLY RUNNING 
		node_19_path_module.js
	```
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
## EXTRA : NODE PROCESS.CWD 

CWD = CURRENT WORKING DIRECTORY
	
  ```JS
	process
	
	process.cwd()  CURRENT WORKING DIRECTORY (EG OF ROOT OF YOUR WEBSITE)
	
	process.chdir("<relative change in path from current working directory")
		process.chdir("../");  means move up one directory
		
			Note : if fails to locate new directory the current working directory 
					remains the same as it was before.   You can code for this error
					using try()catch()finally() loop 
					
	process.execPath ==> tells you the location of the NODE.JS EXECUTABLE FILE 
	
	process.env.PATH is the ARRAY of your PATH VARIABLES with a delimiter of
		Windows - semi colon
		Linux -  colon
		node - path.delimiter 
		
		so can split the PATH strings into an array of strings using 
		
		process.env.PATH.split(path.delimiter) which works equally well on Windows 
				and Linux
				
				PRINT OUT EVERY ITEM IN PATH VARIABLE
				
				process.env.PATH.split(path.delimiter).forEach(function(dir){
					console.log(dir);
				});
				
			
		RUN IN NODE process.env.PATH.split(path.delimiter).forEach(function(dir){ console.log(dir); });
	
	
	          node_65_process.js 
	
	```
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
##  The Callback Pattern 

	What are callbacks.
	In a synchronous program, you would write something along the lines of:
	function processData () {
	  var data = fetchData ();   // TAKES A LONG TIME
	  data += 1;
	  return data;
	}
	This works just fine and is very typical in other development environments. 
	
	However, if fetchData takes a long time to load the data (maybe it is streaming it off the drive or the internet), then this causes the whole program to 'block' - otherwise known as sitting still and waiting - until it loads the data. 
	
	Node.js, being an asynchronous platform, doesn't wait around for things like file I/O to finish - Node.js uses callbacks. 
	
	A callback is a function called at the completion of a given task; this prevents any blocking, and allows other code to be run in the meantime.
	The node.js way to deal with the above would look a bit more like this:
	function processData (callback) {
	  fetchData(function (err, data) {
		if (err) {
		  console.log("An error has occured. Abort everything!");
		  callback(err);
		}
		data += 1;
		callback(data);
	  });
	}
	fs.readFile('/foo.txt', function(err, data) {
	  console.log(data);
	});
	
	THE CALLBACK PATTERN
	
	
		getData(a,b,c,callback)
	
	
	function callback(err,data){
		if(err){
				// ERROR CODE
				return;
		}
		
		// DO THIS CODE
	
	}
	
	
	
	
		
CALLBACK FUNCTION STRUCTURE
	Module_name.function_name(inputs, callback_function(){});
	
      fs       .readFile     (<path>,callback(){  });	
	
	
	
	
	
	
	
Callback-last.
Error-first.
	TO ENSURE YOU HANDLE ALL ERRORS, MAKE SURE THE FIRST PARAMETER IN ALL CALLBACKS IS THE ERROR VARIABLE
	
	WHEN CALLING A FUNCTION, ENSURE THE CALLBACK PARAMETER IS THE LAST PARAMETER
	
	
	
	
	
	
	
	
	
	
	
	
	
Callback vs Emitter
	CALLBACKS ARE CALLED ONCE AND YOU GET BACK
	
		ONE ERROR
		
		ONE RESULT
		
		
	EVENT EMITTERS CAN BE CALLED MULTIPLE TIMES SO ARE USED WHEN YOU NEED 
	
		MULTIPLE EVENTS
		
		POSSIBLE NOTIFICATION OF MULTIPLE ERRORS
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
##  FS MODULE : FILE SYSTEM

 = managing FILES 

	https://nodejs.org/api/fs.html#fs_file_system
	
	
	
FS.WRITEFILESYNC : CREATE A TEXT FILE WITH CONTENT 
	var fs = require('fs');
	fs.writeFileSync("abc.txt","Content inside file");
			node_18_writefile_readfile.js
	
	
	
FS.READFILESYNC : READ TEXT FILE AS HEX            (SYNC = Synchronous = WHOLE FILE!)
	/* Read file as HEX */
	console.log(fs.readFileSync("abc.txt"));
	
			node_18_writefile_readfile.js
	
	
FS.READFILESYNC : READ TEXT FILE AS STRING 
	/* Read file as STRING */
	console.log(fs.readFileSync("abc.txt").toString());
	
	
	
	
FS.READFILESYNC : READ TEXT FILE AS JSON DATA 
	
	var x = JSON.parse(fs.readFileSync("abc.txt"));
	
		console.log("Field a holds value " + x.a);
		console.log("Field b holds value " + x.b);
	
	
	
	
	
	
FS.ACCESS (PATH)      
	CHECK TO SEE 
			
		1) IF THE PATH EXISTS (DON'T USE FS.EXISTS BUT USE THIS INSTEAD) 
		
		2) IF PERMISSIONS ALLOW ACCESS 
		
	CHECK PERMISSION AND ACCESS TO FILE 
	
			var fs = require('fs');
			fs.access('./abc.txt',function(err){
				if(err){
					console.log(error);
				}
				else{
					console.log('success');
					console.log("Read OK with code : " + fs.R_OK);
					console.log("Write OK with code : " + fs.W_OK);
				}
			});
			
		
		
			node_66_fs_access.js
			
			
		
		
		
		
		
		
		
		
		
		
## FS.STATS 

	fs.stat(path,function(error,stats){console.log(stats)});
	STATS.ISFILE()
	     .ISDIRECTORY()
		 .ISSOCKET()
		 SIZE
		 LAST MODIFIED
		 
		var fs = require('fs');
		fs.stat('./abc.txt',function(error,stats){
		  if(error){
			console.log("Error " + error);
		  }
		  else{
			console.log('File Statistics');
			console.log(stats);
			console.log('Is it a file ? ' + stats.isFile());
			console.log('Is it a directory ? ' + stats.isDirectory());
			console.log('Is it a socket ? ' + stats.isSocket());
			console.log('Size is ' + stats.size);
			console.log('Last modified ' + stats.mtime);
		  }
		});
	
FS.OPEN : OPEN FILE BEFORE READ 
	fs.exists() should not be used to check if a file exists before calling fs.open(). Doing so introduces a race condition since other processes may change the file's state between the two calls. Instead, user code should call fs.open() directly and handle the error raised if the file is non-existent.
	
	
	fs.open(path,"w",callback(){});
	
		w = write 
		r  read 
		r+ read write
		a append 
		a+ read and append
	
	
	fs.open(path,"w+",function(error,fd){
		if(error)..else..
	}   									fd=file descriptor
	
	
	
	
	
	
	
FS.READFILE : READ FILE ASYNCHRONOUSLY FOR READING (AFTER OPEN)
	fs.readfile(path,encoding,callback)
	
		encoding = utf8 
		
		callback = function(err,data){}
		
		
		
		
		
		
FS.APPENDFILE(PATH,DATA)
	fs.appendFile('message.txt', 'data to append', (err) => {
	  if (err) throw err;
	  console.log('The "data to append" was appended to file!');
	});
		
		
		
		
		
		
FS.WRITE(FD,DATA,OFFSET,LENGTH,POSITION,CALLBACK)
	WRITES BUFFER TO FILE AT POSITION INDICATED
	OFFSET FROM START OF DATA 
	LENGTH TO COPY 
	POSITION IN DESTINATION FILE TO BEGIN ADDING DATA 
			
			
FS.WRITE(FD,DATA,POSITION,CALLBACK)
	WRITES ALL DATA TO FD AT POSITION.
			
	
FS.CREATEWRITESTREAM(PATH)
	MODIFY EXISTING FILE 
	
	Stream of data so YOU DON'T NEED TO KNOW THE LENGTH OF THE STREAM IN ADVANCE 
	
	
	
			
FS.WRITEFILE(path,data,callback)
	OVERWRITE EXISTING FILE 
	
	
	
FS.CREATEREADSTREAM(PATH)
	Read a stream of data that you don't exactly know the length of before you start so it could be any size - you just handle the data accordingly as it arrives
	
	
FS.RENAME
	fs.rename(old,new,callback)
FS.MKDIR(path)
	fs.mkdir(path,callback)
	
FS.RMDIR 
	fs.rmdir(path,callback)
		
FS.CLOSE(FD)
	fs.close(fd,callback)
	
	
	
NOTE : COPY DOES NOT EXIST SO WOULD HAVE TO READ THEN WRITE 
FS.READDIR : READ CONTENTS OF A DIRECTORY 
	
	fs.readdir(path,callback) 
	
	
		https://nodejs.org/api/fs.html#fs_fs_readdir_path_callback
		
	
		cannot use file name glob patterns like ls /tmp/*core*. 
	
	
			var fs = require('fs');
			fs.readdir(path,function(err,dir){
				fs.stat(dir,function(error,stats){
				  if(error){
					console.log("Error " + error);
				  }
				  else{
					console.log('File Statistics');
					console.log(stats);
					console.log('Is it a file ? ' + stats.isFile());
					console.log('Is it a directory ? ' + stats.isDirectory());
					console.log('Is it a socket ? ' + stats.isSocket());
					console.log('Size is ' + stats.size);
					console.log('Last modified ' + stats.mtime);
				  }
				});
			});
			
			
	
	
	
	
	
	
	
	
	
	
	fs.readdirSync (Synchronous so code stops)
	
		https://nodejs.org/api/fs.html#fs_fs_readdirsync_path
	
FS.WATCH(path,listener)
	WATCH FILE FOR CHANGES AND NOTIFY LISTENER 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	
## NODE-GLOB : SEARCH 

SEARCH FOR A FILE WITHIN FOLDERS 

	CAN USE PATTERNS EG *.TXT  TO SEARCH FOR ALL TEXT FILES 
		
	Search with patterns 
	
		github.com/isaacs/node-glob. 
	
		Globs can even search in sub-directories
		
		
		
		
## NODE-WALK : SEARCH 

SEARCH FOR A FILE WITHIN FOLDERS 
		
		Recursive search   (Search a folder then search all subfolders before moving on)
		
```js
		(using node-walk: npm install walk)
		var walk    = require('walk');
		var files   = [];
		// Walker options
		var walker  = walk.walk('./test', { followLinks: false });
		walker.on('file', function(root, stat, next) {
			// Add this file to the list of files
			files.push(root + '/' + stat.name);
			next();
		});
		walker.on('end', function() {
			console.log(files);
		});
	
	
		Parallel loop search (fast, async)
	
			var fs = require('fs');
			var path = require('path');
			var walk = function(dir, done) {
			  var results = [];
			  fs.readdir(dir, function(err, list) {
				if (err) return done(err);
				var pending = list.length;
				if (!pending) return done(null, results);
				list.forEach(function(file) {
				  file = path.resolve(dir, file);
				  fs.stat(file, function(err, stat) {
					if (stat && stat.isDirectory()) {
					  walk(file, function(err, res) {
						results = results.concat(res);
						if (!--pending) done(null, results);
					  });
					} else {
					  results.push(file);
					  if (!--pending) done(null, results);
					}
				  });
				});
			  });
			};
			
			
			
NODE-DIR : READ AND PROCESS FILES AND DIRECTORIES INCLUDING SEARCH 
FILE : WALK THROUGH ALL DIRECTORIES AND PERFORM TASK ON EACH ONE 
READDIRP  PIPES OUTPUT AS A STREAM
			
FindIt : Walk a directory tree in Node.js
	var findit = require('findit');
	findit.find('/dir/to/walk', function (file) {  
	  //
	  // This function is called each time a file is enumerated in the dir tree
	  //
	  console.log(file);
	});
	
```
			
			
			
			
			
			
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
## Processes

	TASK RUNNING WHICH IS SENDING INFORMATION THROUGH TO THE CPU VIA A PROCESS ID /PID 
	
	
	NAMES GIVEN TO DIFFERENT TYPES OF CODE RUNNING ON YOUR COMPUTER
		
		APPLICATION 
			USER-INITIATED
		SERVICE 
			SYSTEM-INITIATED (CAN HAVE NO GUI)
		PROCESS
			CONSUMING CPU RESOURCES
			
		THREAD 
			INDIVIDUAL LINE OR BATCH OF CODE BEING SENT TO THE CPU RIGHT NOW 
			
		
	
	
	
Managing processes	
	
	
	WINDOWS 
				
		TASK MANAGER 
		TASKLIST 
		TASKKILL
		
	
	
		
		
		
		
					
	
	LINUX  
	
		ACTIVITY MONITOR 
		top 
		top -o cpu   ORDER BY CPU 
		top -o rsize  ORDER BY RAM SIZE 
		ps aux | more 
		ps -e|grep node           LIST NODE PROCESSES 
		ps -ef | grep node 
		ps T                      LIST PROCESSES ON THIS TERMINAL 
		kill <process_id> 
		kill -9 <process_id>
		killall <name_of_process>
		pkill node                  KILLS ALL NODE PROCESSES 
		pkill -f node 
	
	
	
	
	
	
	
	
	
	
	
			
		
		
## PS-NODE
	
		MANAGE PROCESSES USING NODE
	
		https://www.npmjs.com/package/ps-node
		
		
```js		
		var ps = require('ps-node');
		 
		// A simple pid lookup 
		ps.lookup({
			command: 'node',
			arguments: '--debug',
			}, function(err, resultList ) {
			if (err) {
				throw new Error( err );
			}
		 
			resultList.forEach(function( process ){
				if( process ){
					console.log( 'PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments );
				}
			});
		});
			
			
		var ps = require('ps-node');
	 
		// A simple pid lookup 
		ps.kill( '12345', function( err ) {
			if (err) {
				throw new Error( err );
			}
			else {
				console.log( 'Process %s has been killed!', pid );
			}
		});
```
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
				
		
Main Node Process 
	console.log("Process " + process.argv[1] +" at work " );       
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
## Creating Child Processes

	THREE WAYS TO CREATE CHILD PROCESSES
	
		EXEC : NO COMMUNICATION UNTIL THE END
		
		SPAWN : CHILD PROCESS CAN COMMUNICATE WHILE IT IS RUNNING
		
		FORK : TWO-WAY SOCKET I/O COMMUNCATION BETWEEN PARENT AND CHILD PROCESS CAN TAKE PLACE
		
	
	
	
	
Creating A Child Process With EXEC 
	ONLY COMMUNICATION WITH THIS PROCESS IS AT THE END AFTER PROCESS TERMINATES AND RETURNS CONTROL TO THE PARENT PROCESS 
	
	IE OUTPUT ONLY OBTAINED ONCE, AT THE END OF THE PROCESS AND NOT WHILE IT IS RUNNING 
	
	PROBLEM : NOT REAL TIME FEEDBACK 
	
	
	
	INFO
	
		https://nodejs.org/api/child_process.html
	
	
	REQUIRE 
		var exec=require('child_process').exec;
	CREATE THE CHILD PROCESS 
	
		var child=exec('node ./file.js);
	
	AWAIT DATA WITH STDOUT ON 'DATA' ARRIVAL (AT TERMINATION OF PROCESS)
	
		child.stdout.on('data',callback);
				
	EXAMPLE WITH STDOUT OUTPUT 
	
	
```js			
				var exec = require('child_process').exec;
				exec('node ./node_57_server.js', function(error,stdout,stderr){
				 console.log('stdout: ', stdout);
				 console.log('stderr: ', stderr);
				 if(error !== null){
					console.log('exec error: ', error);
				 }
				});
				
				
				OR 
				
				var exec = require('child_process').exec;
				var child = exec('node ./node_57_server.js');
				child.stdout.on('data', function(data) {
					console.log('stdout: ' + data);
				});
	```			
				
	SECOND EXAMPLE WITH STDOUT OUTPUT 
	
  ```js
			
				var exec=require('child_process').exec;
				var child=exec('node ./node_58_server_child_process.js');
				console.log('child process successfully started');
				console.log(child);
				child.stdout.on('data',function(data){
				 console.log('stdout: ' + data);
				});
				child.stderr.on('data',function(data){
				 console.log('stderr: ' + data);
				});
				child.on('close',function(code){
				 console.log('closing child process with code ' + code);
				});
				
	```			
	
	
		
				
				
	OK TO CREATE GRANDCHILDREN PROCESSES ALSO 
			MASTER 
		
				CHILD1
						GRANDCHILD1
			
						GRANDCHILD2
						
				CHILD2
				
				
				
	
	
	
	
	
	
	
	
## Terminating A Child Process 

	PARENT HAS PROCESS ID process.pid 
	
	CHILD HAS PROCESS ID child.pid 
	
	
	LINUX TERMINATE PROCESS 
	
		
		kill a process using kill(child.pid); BUT ONLY WORKS IN LINUX!
	
	
	
	
	

	
	WINDOWS - TASKKILL BY PROCESS ID 
	
```js
			var isWin = /^win/.test(process.platform);
			if(!isWin) {
				kill(processing.pid);
			} else {
				var cp = require('child_process');
				cp.exec('taskkill /PID ' + child.pid + ' /T /F', function (error, stdout, stderr) {
					// console.log('stdout: ' + stdout);
					// console.log('stderr: ' + stderr);
					// if(error !== null) {
					//      console.log('exec error: ' + error);
					// }
				});             
			}
```





	WINDOWS - TASKKILL BY PROCESS NAME 
		This will be the easiest to use to kill all node processes 
		manually with one quick command
			
		taskkill /im node.exe /f 
	
				
Creating A Child Process With Spawn
	
	WITH SPAWN COMMUNICATION CAN TAKE PLACE AT ANY TIME WHEN CHILD PROCESS IS RUNNING 
	
	https://nodejs.org/api/child_process.html 
		
	http://jlunaquiroga.blogspot.co.uk/2014/03/creating-processes-in-nodejs.html
		
	Excellent Lab 
	
		http://www.tutorialspoint.com/nodejs/nodejs_scaling_application.htm
		
		
	
		
	child_process.spawn(command, [args], [options])
			
			
			
				
	WORKED EXAMPLE WITH SPAWN A CHILD PROCESS 
		
				const fs = require('fs');
				const child_process = require('child_process');
				 
				for(var i=0; i<3; i++) {
				  var workerProcess = child_process.spawn('node', ['node_00_HelloWorld.js', i]);
				  workerProcess.stdout.on('data', function (data) {
					 console.log('stdout: ' + data);
				  });
				  workerProcess.stderr.on('data', function (data) {
					 console.log('stderr: ' + data);
				  });
				  workerProcess.on('close', function (code) {
					 console.log('child process exited with code ' + code);
				  });
				}
					node_60_script.js 
					
			
		
		
		
		
	SECOND WORKED EXAMPLE WITH SPAWN PROCESS 
	
		const
			 fs = require('fs'),
			 process = require('child_process');
		for(var i=0; i<10; i++) {
			var ls = process.exec('node worker.js '+i, function (error, stdout, stderr) {
			   if (error) {
				 console.log(error.stack);
				 console.log('Error code: '+error.code);
				 console.log('Signal received: '+error.signal);
			   }
			   console.log('stdout: ' + stdout);
			   console.log('stderr: ' + stderr);
			   
			 });
			
			 ls.on('exit', function (code) {
			   console.log('Child process exited with exit code '+code);
			 });
		}
	
	CREATING A CHILD PROCESS AND TALKING TO IT : TEST APPLICATION USING A TIMER 
		http://www.andygup.net/node-js-moving-intensive-tasks-to-a-child-process/
		
		
	
	
	
	
	
	
	
CREATING A CHILD PROCESS USING FORK WHICH ALLOWS 2-WAY SOCKET.IO COMMUNCATION WITH THE CHILD PROCESS 
 
	http://www.tutorialspoint.com/nodejs/nodejs_scaling_application.htm
	
	
	   see node_61_process_fork.js 
		
		
	https://nodejs.org/api/child_process.html#child_process_child_send_message_sendhandle_callback
	
	
	FORK IS SAME AS SPAWN PLUS HAS 
	
	
		A 2-WAY COMMUNICATION CHANNEL SET UP TO SEND LIVE MESSAGES!!!
	
		
	


		
## Media

In order to play sounds from `nodejs` to your computer you must have a connection.  In Windows the easiest way to do this is to download and have available `mplayer.exe` which is available at http://mplayerwin.sourceforge.net/downloads.html - download the `7zip` file and extract and use the `mplayer.exe` file in your node project.

## play-sound

To play a sound file we can use https://www.npmjs.com/package/play-sound

```js
npm install play-sound
```
```js
var player = require('play-sound')({player:"mplayer/mplayer.exe"})
player.play('assets/media/mp3-sample-sound.mp3', (err) => {
  if(err) throw err;
  console.log('audio finished')
});
```

See [node-play-sound.js](../nodejs/single-node-files/node-play-sound.js)


### Speaking Text

To speak text we can use https://www.npmjs.com/package/say

```js
npm install say
```

```js
const say = require('say')
say.speak('Hello');
```

```js
const say = require('say')
say.speak('Hello');

//say.speak("What's up, dog?", 'Alex', 0.5)

say.speak("What's up, dog?", 'Good News', 1.0, (err) => {
    console.log('finished');
})

// Export spoken audio to a WAV file
say.export("I'm sorry, Dave.", 'hal.wav', (err) => {
    if (err) {
      return console.error(err)
    } 
    console.log('Text has been saved to hal.wav.')
})
```



	
	
## Logging
	
[node-logging](node-logging.md)

		
## MongoDB

[MongoDB](notes/mongo.md)

[Mongo Access Control](notes/mongo-access-control.md)

[Mongoose](notes/mongoose.md)		
