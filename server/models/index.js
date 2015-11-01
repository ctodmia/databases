var db = require('../db');
//we are going to focus on controllers and models. 
//controllers depend on models and models depend on database

//



module.exports = {
  messages: {
    get: function (callback) {
      //fetch all messages
        //get ide, text, roomname, and username. note the username exist in a differnt 
        //table is related through a user id. 
      var queryStr = "select messages.id, messages.text, messages.roomname, users.username, from messages left outer join users on (messages.userid = users.id) order by messages.id desc";
              //join that produces much looser selection criteria. so you user outer join particularly a left
      db.con.query(queryStr, function(err, results){
        callback(results);
      })
    }, // a function which produces all the messages
    post: function (params, callback) {
      //create a message
      console.log('this is params', params);
      var params2 = [params.username, params.message, params.roomname];
      var queryStr = "insert into messages (username, message, roomname) values (?, ?, ?)";
      db.con.query(queryStr, params2, function(err, results){
        console.log('hi');
        console.log('this, is results', results);
        callback(results);

      })
    },
  },
  users: {
    // Ditto as above.
    get: function (callback) {
      //fetch all users
      var queryStr = "select * from users";
      db.con.query(queryStr, function(err, results){
        callback(results); //callbacks are for communicating results back from asynchronus functions
      });
    },
    post: function (params, callback) {
      //create a users
      var queryStr = "insert into users(username) value (?)"; //? is an argument to the query function itself
      //this means you need to pass in params to your post request and db.query
      db.con.query(queryStr, params, function(err, results){
        callback(results);
      });
    }
  }
};