const db = require('../models');

module.exports = (app) => {

    app.get('/api/books', (req, res) => {
        db.bookTitle.findall({
            include: [db.Post],
        }).then((dbbookTitle) => res.json(dbbookTitle));
    });
}