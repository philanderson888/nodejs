
 
 
NODE LABS

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
	
	
	
	
	
	
	
	
	
	