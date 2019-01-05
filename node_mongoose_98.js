/* not working */
var mongoose = require('mongoose');
var myDatabase = 'mongodb://localhost/test';
var Schema = mongoose.Schema;
var bookSchema = new Schema({
	title:String,
	keywords:Array,
	published:Boolean
});
mongoose.connect(myDatabase);
module.exports = mongoose.model('Book', BookSchema);
