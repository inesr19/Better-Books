const mysql = require('mysql2');
const dotenv = require('dotenv').config();
const myPassword = process.env.MYSQL_PASSWORD;

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: myPassword,
    database: 'books_db',
  });

  module.exports = connection;