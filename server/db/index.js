var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "chat",
});

con.connect();
// con.query('SELECT * FROM messages', function(err, rows, fields){
//   if(err) {
//     throw err;
//   }
//   console.log('The solution is:', rows);
// })


exports.con = con;
// con.end();
