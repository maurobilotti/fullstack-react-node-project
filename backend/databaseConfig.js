var mysql = require('mysql');

config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'so'
}
var connection =mysql.createConnection(config); //added the line
connection.connect(function(err){
  if (err){
    console.log('error connecting:' + err.stack);
  }
  console.log('connected successfully to DB.');
});

module.exports ={
     connection : mysql.createConnection(config) 
} 


// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'so'
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to Sponsor.Online BD!');
// });