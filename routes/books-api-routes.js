const db = require('../models');

module.exports = (app) => {
    app.get('/api/list:email', (req, res) => {
        db.Book.findAll({
            where: {
                email: req.params.email
            }
        }).then((dbBook) => res.json(dbBook));
    });


    app.post('/api/list', (req, res) => {
        console.log(req.body);
        res.send('hello')
         db.post.create({
            title: req.body.title,
            author: req.body.author,
            email: req.body.email,
            isbn: req.body.isbn
        }).then((dbPost) => res.json(dbPost));
    });

    app.post('/api/login', (req, res) => {
        console.log(req.body);
        db.User.findAll({
            where: {
                email: req.body.email
            }
        })
        .then((dbUser) => res.json(dbUser));
    });
}