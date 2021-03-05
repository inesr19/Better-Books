const mysql = require('mysql');
const dotenv = require('dotenv').config();
const myPassword = process.env.MYSQL_PASSWORD;

if(process.env.JAWDB_URL){
connection =   mysql.createConnection(process.env.JAWSDB_URL);
}else{
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: myPassword,
    database: 'books_db',
  });
};

  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
  });

  module.exports = connection;