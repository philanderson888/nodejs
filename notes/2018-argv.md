# Node Arguments


## contents


- [Node Arguments](#node-arguments)
	- [contents](#contents)
	- [passing parameters](#passing-parameters)
	

	
## passing parameters

	
RUNNING NODE BUT PASSING PARAMETERS INTO THE APPLICATION AT RUNTIME 

ARGV : HOLDS THE ARRAY OF PARAMETERS PASSED TO THE APPLICATION 

EG NODE MYFILE.JS A B C 

```js
process.argv[] array holds the following 

process.argv[0] is NODE EXECUTABLE 
		
process.argv[1] is NODE APPLICATION 
		
process.argv[2] is FIRST PARAMETER PASSED 
		
process.argv[3] is SECOND PARAMETER PASSED 
```

see node_30_argv_parameters.js 

ARGV HOLDS [NODE,JAVASCRIPT FILE,PARAMETERS]

```js
node node_30_argv_parameters.js one two three four five
/*
	 [ 'C:\\Program Files\\nodejs\\node.exe',
	   'c:\\OneDrive\\PC\\showcase\\node_30_argv_parameters.js',
	   'one',
	   'two',
	   'three',
	   'four',
	   'five' ]
*/
```

