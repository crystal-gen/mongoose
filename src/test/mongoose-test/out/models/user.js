var mongoose = require('mongoose'),
	relationship = require('mongoose-relationship'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: {
		type: String,
	},
});



var User = mongoose.model('User', UserSchema);


module.exports = User;