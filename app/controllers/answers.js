/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash'),
    Answers = mongoose.model('Answers');



exports.submit = function(req, res) {
    //Find session id entries
    Answers.findOne({
        sessionId: req.body.sessionId
    }, function(err, answers) {
        if (answers) {
            console.log("session exists");
            //If there are answers, reject any exisiting answer by slideId, and insert the updated one
            var newAnswers = _.reject(answers.results, {
                'slideId': req.body.slideId
            });
            newAnswers.push(req.body.answers);
            answers.results = newAnswers;
        } else {
            //Otherwise insert the slide data to the answers object
            answers = new Answers();
            answers.sessionId = req.body.sessionId;
            answers.results = [{
                slideId: req.body.slideId,
                answers: req.body.answers
            }];
        }

        answers.save(function(err, doc) {
            console.log("saved", err, doc);
        });
    });
};
