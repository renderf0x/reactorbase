//schema for messages, both shoutouts and future chirps (status messages)

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
	sender: String,
	recipient: String,
	type: String, //currently, 'shoutout' only, but other types, like 'chirp', possible in future
	title: String,
	content: String,
	date: Date
});

module.exports = mongoose.model('Message', messageSchema);