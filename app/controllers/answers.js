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
        answers.save(function(err, doc) {
            console.log("saved", err, doc);
        });
    });
};

exports.results = function(req, res) {

    Answers.find({}, function(err, answers){
        if (err) throw err; 
        res.jsonp(answers);
    });
}

exports.exportToCSV = function(req, res) {

    var csv = require('csv');
    var fs = require('fs');

    limit = req.query.rows;
    offset = parseInt(req.query.offset);
    Answers.find().limit(limit).skip(offset)
    .exec(function(err, answers){
        if (err) throw err; 
        
        // init the data to export
        string = '';
        //insert the first row - the titles
        for (var i=0; i<answers[0].results.length; i++){
            string += answers[0].results[i].title + ",";
        }
        string += "\n";
        
         //insert the the values
        for(i=0; i<answers.length; i++){
            for (var j=0; j<answers[i].results.length; j++){
                string += answers[i].results[j].val + ",";
            }
            string += "\n";  
        }
        d = new Date();
        fileName = d.getDate() + "-" + d.getMonth()+1 + "-" + d.getFullYear() + "-" + (offset+1) + '.csv';
        var filePath = process.cwd() + '/public/exports/' +fileName;

        csv()
        .from.string(string)
        .to.path(filePath);

        res.attachment(filePath);
        res.setHeader('Content-Type', 'text/csv');
        res.end(string);
    });
};

