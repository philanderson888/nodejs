use strict;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BookSchema = new Schema({
		title:{
			type:String,
			required:true,
			unique:true,
		}
		published:{
			type:Date,
			default:Date.now
		}

});
module.exports=mongoose.model('Book',BookSchema);
