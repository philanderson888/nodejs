# Node Logging


LOGGING WITH FS.APPENDFILE

FS.APPENDFILE(path,string,callback);

```js
fs.appendFile('abc.txt', 'data to append', function (err) {

});
```

LOGGING WITH FS.WRITE 

```js
var fs = require('fs');
var str = 'string to append to file';
fs.open('filepath', 'a', 666, function( e, id ) {
	fs.write( id, 'string to append to file', null, 'utf8', function(){
	fs.close(id, function(){
		console.log('file closed');
	});
	});
});
```

LOGGING WITH FS.CREATEWRITESTREAM 

FS.CREATEWRITESTREAM => MANUAL DIY LOGGING 

	JAVASCRIPT : DETECT GETMONTH()  0-11 
	
		IF (MONTH==2){
			NEW LOG STREAM...
		}
	
		VAR STRING 
		
			<<DATE>> <<IP>> <<PORT>>  MESSAGE  
	
Example 
	
```js
var fs = require('fs');
var logStream = fs.createWriteStream('log.txt', {'flags': 'a'});
// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
logStream.write('Initial line...');
logStream.end('this is the end line');
```		
		

LOGGING WITH LOG4JS 

```js
npm install log4js
```

FIXED CONFIG FILE at https://github.com/nomiddlename/log4js-example/blob/master/config/log4js.json
	
	
```js
var log4js = require('log4js');
var logger = log4js.getLogger();
console.log("inside logging module");
logger.debug("Test Debug Message");
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('logfile.log'),'logfile_category_1');
var logger1 = log4js.getLogger('logfile_category_1');
logger1.trace('Entering test log file');
logger1.trace('');
log4js.addAppender(log4js.appenders.file('logfile.log'),'logfile_category_2');
var logger2 = log4js.getLogger('logfile_category_2');
logger2.trace('Entering test log file');
logger2.trace('');
```

Winston Logging

```js
npm install winston
winston.log('info', 'Hello distributed log files!');
```

Where is the information logged?
	
Storage area is called a 'Transport' in Winston https://github.com/winstonjs/winston/blob/master/docs/transports.md
			
Default is the 'Console'
		
Add your own 'transport' place to log data to https://github.com/winstonjs/winston/blob/master/docs/transports.md
	
LOG TO FILE

```js
winston.add(winston.transports.File, options)
winston.add(winston.transports.File, { filename: 'somefile.log' });
```

LOG TO HTTP SOCKET

```js
winston.add(winston.transports.Http, options)
```

LOG TO DATABASE	

		
METADATA ADDED TO A LOG
	
```js
winston.log('info', 'Test Log Message', { anything: 'This is metadata' });
```

QUERY LOGS

```js
winston.query(options, function (err, results) {
	if (err) {
		throw err;
	}
	console.log(results);
});

	var options = {
	from: new Date - 24 * 60 * 60 * 1000,
	until: new Date,
	limit: 10,
	start: 0,
	order: 'desc',
	fields: ['message']
	};
```	
