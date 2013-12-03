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
    results: [{
        slideId: String,
        answers: [{
            title: String,
            body: String,
            val: Number
        }]   
    }]
});



mongoose.model('Answers', AnswersSchema);