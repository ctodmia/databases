var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
    //if(req the method is post ){
      //create an empty string that will compress your incoming 
      //if there is a data event being emitted. 
        //then create an em
      

      //res.on('data', function(chunk){
        // results = ''
        // results +=chunk;
        //models.messages.post(results)
    //   })
    // }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

