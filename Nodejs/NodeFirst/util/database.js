const mysql=require('mysql');
const connection =mysql.createPool({
    host:'localhost',
    port:3306,
    database:'test',
    user:'root',
    password:'root'
  })

  connection.getConnection(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });


  module.exports=connection;