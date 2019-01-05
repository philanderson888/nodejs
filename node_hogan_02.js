var hogan = require('hogan.js');
var template = '{{#students}}<p>Name:{{name}} Age: {{age}}</p>{{/students}}';
var context = {
  students:[
  	{name:'Phil Anderson',age:22},
  	{name:'Rosie Lee',age:57}
  ]
};
var template = hogan.compile(template);
console.log(template.render(context));