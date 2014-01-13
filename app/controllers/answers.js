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
        string = '';
        for (var i=0; i<answers[0].results.length; i++){
            console.log(answers[0].results[i]);
            string += answers[0].results[i].title + ",";
        }   
        string += "\n";
        for(var i=0; i<answers.length; i++){
            for (var j=0; j<answers[i].results.length; j++){
                string += answers[i].results[j].val + ",";
            }
            string += "\n"   
        };
        console.log(string);

        //
        var csv = require('csv');
        var fs = require('fs');
        csv()
        .from.string(
        string,
        {comment: '#'} )
        .to.path(__dirname+'/sample.csv')
        .transform( function(row){
          row.unshift(row.pop());
          return row;
        })
        .on('record', function(row,index){
          console.log('#'+index+' '+JSON.stringify(row));
        })
        .on('end', function(count){
          console.log('Number of lines: '+count);
        })
        .on('error', function(error){
          console.log(error.message);
        });
        

        res.jsonp(answers);
    });
};

