const path = require('path');

module.exports = (app) => {
    app.get('/', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/login.html'))
    );

    app.get('/books', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/books.html'))
    );

    app.get('/list', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/list.html'))
    );

    app.get('/logoff', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/login.html'))
    );
};