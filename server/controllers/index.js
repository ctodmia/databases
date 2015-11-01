var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      // console.log(req);
      models.messages.get(function(err, results){
        //TODO: handle err
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
        // var params = [req.body['text'], req.body['username'], req.body['roomname']];
        console.log('request', req.body);
        models.messages.post(req.body, function(err, results){
        //TODO: handle err
        //params must be an array. wer are getting the results in the body. 
        res.json(results);
      });
   
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
        models.users.get(function(err, results){
        //TODO: handle err
        res.json(results);
      });
    },
    post: function (req, res) {
          // var params = req.body[username];
        models.users.post(params, function(err, results){
        //TODO: handle err
        //params must be an array. wer are getting the results in the body. 
        res.json(results)
      });
    }
  }
};
