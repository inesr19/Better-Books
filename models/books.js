const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

const Book = sequelize.define('Book', {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    genre: Sequelize.STRING,
    pages: Sequelize.INTEGER,
});

Book.sync();

module.exports = Book;