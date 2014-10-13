// app/models/cohort.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CohortSchema = new Schema({
	name: String,
	shortName: String,
	startDate: Date
});

module.exports = mongoose.model('Cohort', CohortSchema);