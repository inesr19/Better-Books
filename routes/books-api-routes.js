const db = require('../models');

module.exports = (app) => {
    app.get('/api/list:email', (req, res) => {
        db.Book.findAll({
            where: {
                email: req.params.email
            }
        }).then((dbBook) => res.json(dbBook));
    });


    app.post('/api/books', (req, res) => {
        console.log(req.body);
        db.Post.create({
            title: req.body.title,
            body: req.body.body,
            category: req.body.category,
            email: req.body.email
        }).then((dbPost) => res.json(dbPost));
    });

    app.post('/api/login', (req, res) => {
        console.log(req.body);
        db.User.findAll({
            where: {
                email: req.body.email
            }
        })
        }).then((dbUser) => res.json(dbUser));
    });
}