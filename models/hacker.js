// app/models/hacker.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HackerSchema = new Schema({
	name: String,
	name_note: String,
	photo: String,
	q1: String,
	q2: String,
	q3: String,
	q4: String,
	q5: Array,
	cohort: String
});

module.exports = mongoose.model('Hacker', HackerSchema);