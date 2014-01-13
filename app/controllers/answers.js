/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash'),
    Answers = mongoose.model('Answers');


//the original method
// exports.submit = function(req, res) {
//     //Find session id entries
//     Answers.findOne({
//         sessionId: req.body.sessionId
//     }, function(err, answers) {
//         if (answers) {
//             console.log("session exists");
//             console.log(req.body.slideId);
//             //If there are answers, reject any exisiting answer by slideId, and insert the updated one
//             var newAnswers = _.reject(answers.results, {
//                 'slideId': req.body
//             });
//             newAnswers.push(req.body.answers);
//             answers.results = newAnswers;
//         } else {
//             //Otherwise insert the slide data to the answers object
//             answers = new Answers();
//             answers.sessionId = req.body.sessionId;
//             answers.results = [{
//                 slideId: req.body.slideId,
//                 answers: req.body.answers
//             }];
//         }

//         answers.save(function(err, doc) {
//             console.log("saved", err, doc);
//         });
//     });
// };


exports.submit = function(req, res) {
    //Find session id entries
    console.log(req.body);
    Answers.findOne({
        sessionId: req.body.sessionId
    }, function(err, answers) {
        if (!answers) {
            answers = new Answers();
            answers.sessionId = req.body.sessionId;
        }
        answers.results = req.body.results;
        console.log(answers);
        answers.save(function(err, doc) {
            console.log("saved", err, doc);
        });
    });
};

exports.exportToCSV = function(req, res) {
    Answers.find({}, function(err, answers){
        if (err) throw err; 
        res.jsonp(answers);
    });
};

