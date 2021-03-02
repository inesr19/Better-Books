const db = require('../models');

module.exports = (app) => {
    app.get('/api/books', (req, res) => {
        db.Book.findAll({}).then((dbBook) => res.json(dbBook));
    });
}