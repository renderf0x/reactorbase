// app/models/hacker.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HackerSchema = new Schema({
	name: String
});

module.exports = mongoose.model('Hacker', HackerSchema);