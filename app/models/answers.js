/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),    
    Schema = mongoose.Schema;


/**
 * Answer Schema
 */
var AnswersSchema = new Schema({
    sessionId: String,
    ip: String,
    results: [{
        title: String,
        body: String,
        val: String
    }]
});



mongoose.model('Answers', AnswersSchema);