# files

## contents

- [files](#files)
	- [contents](#contents)
	- [overview](#overview)
	- [path module](#path-module)
	- [path.normalise](#pathnormalise)
	- [path.dirname](#pathdirname)
	- [path.basename](#pathbasename)
	- [path.extname](#pathextname)
	- [process.execPath](#processexecpath)
	- [process.env.PATH](#processenvpath)
	- [print out every item in $path](#print-out-every-item-in-path)
	- [fs module](#fs-module)
		- [fs write file sync](#fs-write-file-sync)
		- [fs read file sync](#fs-read-file-sync)
		- [fs access](#fs-access)
		- [fs stats](#fs-stats)
		- [fs open](#fs-open)
		- [fs read file](#fs-read-file)
		- [fs append file](#fs-append-file)
		- [fs write](#fs-write)
		- [fs create write stream](#fs-create-write-stream)
		- [fs write file](#fs-write-file)
		- [fs create read stream](#fs-create-read-stream)
		- [fs rename](#fs-rename)
		- [fs mkdir](#fs-mkdir)
		- [fs read dir](#fs-read-dir)
		- [fs watch](#fs-watch)
	- [node glob](#node-glob)
	- [node walk](#node-walk)
		- [find it](#find-it)

## overview

PATH MANAGEMENT TO REACH FILES IN NODE 
	
## path module

```js
var path = require('path');
```

Used for working with all file paths in NODE
	
/ and \ both used 
	
```js
path.sep ==> separator character being used ie \ or /
```
	
sep will automatically use the correct separator character depending on the operating system you are using
			
```js
var parentFolder = "parentFolder";
var childFolder = "childFolder";
var totalFolderPath = parentFolder + path.sep + childFolder;
```

see node_19_path_module.js

## path.normalise 

will change your path string to reflect the correct path.sep separator character depening on your operating system ie Windows or Linux 

```js
path.normalise(<your_path_here>);
```

returns your path string with correct version of \ or / depending Windows (\) or linux (/)

## path.dirname

```js
path.dirname =>    	Folder path to file
					File Name Minus Extension
```

## path.basename

```js
path.basename(fileName,extension);
```

## path.extname

```js
path.extname ==> 	file extension name 
```

example

```js
fileName="C:\\folder\\folder\\file.exe";
path.extname(fileName);
```	

## __dirname

__dirname  ==> Full directory name of the JAVASCRIPT FILE WHICH IS CURRENTLY RUNNING 

## __filename

__filename ==> FULL PATH AND FILENAME OF THE JAVASCRIPT FILE WHICH IS CURRENTLY RUNNING 

see node_19_path_module.js

## cwd current working directory

NODE PROCESS.CWD CURRENT WORKING DIRECTORY

```js
process
	
process.cwd()  CURRENT WORKING DIRECTORY (EG OF ROOT OF YOUR WEBSITE)

process.chdir("<relative change in path from current working directory")

process.chdir("../");  means move up one directory
```

Note : if fails to locate new directory the current working directory remains the same as it was before.   You can code for this error using try()catch()finally() loop 

## process.execPath

```js
process.execPath ==> tells you the location of the NODE.JS EXECUTABLE FILE 
```

## process.env.PATH

```js
process.env.PATH
```

... is the ARRAY of your PATH VARIABLES with a delimiter of

- Windows - semi colon
- Linux -  colon
- node - path.delimiter 

... so can split the PATH strings into an array of strings using 
		
```js
process.env.PATH.split(path.delimiter) 
```

... which works equally well on Windows and Linux

## print out every item in $path

PRINT OUT EVERY ITEM IN PATH VARIABLE

```js
process.env.PATH.split(path.delimiter).forEach(function(dir){
	console.log(dir);
});
```

RUN IN NODE 

```js
process.env.PATH.split(path.delimiter).forEach(function(dir){ console.log(dir); });
```

see node_65_process.js 


## fs module

FS MODULE : FILE SYSTEM = managing FILES 

https://nodejs.org/api/fs.html#fs_file_system


### fs write file sync

FS.WRITEFILESYNC : CREATE A TEXT FILE WITH CONTENT 

```js
var fs = require('fs');
fs.writeFileSync("abc.txt","Content inside file");
```

see node_18_writefile_readfile.js


### fs read file sync

FS.READFILESYNC : READ TEXT FILE AS HEX          

```js
/* Read file as HEX */
console.log(fs.readFileSync("abc.txt"));
```

see node_18_writefile_readfile.js
	
FS.READFILESYNC : READ TEXT FILE AS STRING 

```js
/* Read file as STRING */
console.log(fs.readFileSync("abc.txt").toString());
```

FS.READFILESYNC : READ TEXT FILE AS JSON DATA 

```js
var x = JSON.parse(fs.readFileSync("abc.txt"));
console.log("Field a holds value " + x.a);
console.log("Field b holds value " + x.b);
```


### fs access

FS.ACCESS (PATH)      

CHECK TO SEE 
			
1) IF THE PATH EXISTS (DON'T USE FS.EXISTS BUT USE THIS INSTEAD) 
		
2) IF PERMISSIONS ALLOW ACCESS 
		
CHECK PERMISSION AND ACCESS TO FILE 
	
```js
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
```

see node_66_fs_access.js


### fs stats

FS.STATS 

```js
fs.stat(path,function(error,stats){console.log(stats)});
```

```js
STATS.ISFILE()
     .ISDIRECTORY()
     .ISSOCKET()
	 SIZE
	 LAST MODIFIED
```

```js
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
```

### fs open

FS.OPEN : OPEN FILE BEFORE READ 

***fs.exists() should not be used to check if a file exists before calling fs.open(). Doing so introduces a race condition since other processes may change the file's state between the two calls. Instead, user code should call fs.open() directly and handle the error raised if the file is non-existent.***
	
```js
fs.open(path,"w",callback(){});

	w = write 
	r  read 
	r+ read write
	a append 
	a+ read and append


fs.open(path,"w+",function(error,fd){
	if(error)..else..
}   									fd=file descriptor
```


### fs read file

FS.READFILE : READ FILE ASYNCHRONOUSLY FOR READING (AFTER OPEN)

```js
fs.readfile(path,encoding,callback)
	
encoding = utf8 
		
callback = function(err,data){}
```

### fs append file

FS.APPENDFILE(PATH,DATA)

```js
fs.appendFile('message.txt', 'data to append', (err) => {
	if (err) throw err;
	console.log('The "data to append" was appended to file!');
});
```


### fs write

FS.WRITE(FD,DATA,OFFSET,LENGTH,POSITION,CALLBACK)

WRITES BUFFER TO FILE AT POSITION INDICATED

OFFSET FROM START OF DATA 

LENGTH TO COPY 

POSITION IN DESTINATION FILE TO BEGIN ADDING DATA 

```js			
FS.WRITE(FD,DATA,POSITION,CALLBACK)
```

WRITES ALL DATA TO FD AT POSITION.
			
### fs create write stream

FS.CREATEWRITESTREAM(PATH)

MODIFY EXISTING FILE 

Stream of data so YOU DON'T NEED TO KNOW THE LENGTH OF THE STREAM IN ADVANCE 



### fs write file

```js		
FS.WRITEFILE(path,data,callback)
```

OVERWRITE EXISTING FILE 


### fs create read stream

FS.CREATEREADSTREAM(PATH)

Read a stream of data that you don't exactly know the length of before you start so it could be any size - you just handle the data accordingly as it arrives

### fs rename

FS.RENAME

```js
fs.rename(old,new,callback)
```

### fs mkdir

FS.MKDIR(path)

```js
fs.mkdir(path,callback)
```

### fs rmdir

FS.RMDIR 

```js
fs.rmdir(path,callback)
```

### fs close

FS.CLOSE(FD)

```js
fs.close(fd,callback)
```
	
		
NOTE : COPY DOES NOT EXIST SO WOULD HAVE TO READ THEN WRITE 

### fs read dir

FS.READDIR : READ CONTENTS OF A DIRECTORY 

```js
fs.readdir(path,callback) 
```

https://nodejs.org/api/fs.html#fs_fs_readdir_path_callback


cannot use file name glob patterns like ls /tmp/*core*. 

```js	
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
```			


### fs read dir sync

```js
fs.readdirSync (Synchronous so code stops)
```

https://nodejs.org/api/fs.html#fs_fs_readdirsync_path

### fs watch

```js
FS.WATCH(path,listener)
```

WATCH FILE FOR CHANGES AND NOTIFY LISTENER 



## node glob

NODE-GLOB : SEARCH FOR A FILE WITHIN FOLDERS 

CAN USE PATTERNS EG *.TXT  TO SEARCH FOR ALL TEXT FILES 

Search with patterns 

github.com/isaacs/node-glob. 
	
Globs can even search in sub-directories


## node walk

NODE-WALK : SEARCH FOR A FILE WITHIN FOLDERS 

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
```

Parallel loop search (fast, async)

```js
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
```

NODE-DIR : READ AND PROCESS FILES AND DIRECTORIES INCLUDING SEARCH 

FILE : WALK THROUGH ALL DIRECTORIES AND PERFORM TASK ON EACH ONE 

READDIRP  PIPES OUTPUT AS A STREAM
			
### find it

FindIt : Walk a directory tree in Node.js

```js
var findit = require('findit');
findit.find('/dir/to/walk', function (file) {  
	//
	// This function is called each time a file is enumerated in the dir tree
	//
	console.log(file);
});
```
