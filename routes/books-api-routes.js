const db = require('../models');

module.exports = (app) => {
    

    app.post('/api/books', (req, res) => {
        console.log(req.body);
        // res.send('hello')
         db.Book.create({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            cover: req.body.cover,  
            email: req.body.email,
            isbn: req.body.isbn
        }).then((dbPost) => res.json(dbPost));
    });

    app.post('/api/signup', (req, res) => {
        console.log(req.body);
         db.User.create({
            email: req.body.email,
            password: req.body.password
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

    app.get('/api/list/:email', (req, res) => {
        console.log("email we are searching for: ", req.params.email);
        db.Book.findAll({
            where: {
                email: req.params.email
            }
        }).then((dbBook) => res.json(dbBook));
        console.log(req.params.email);
    });
}