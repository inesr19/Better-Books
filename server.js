const cors = require("cors")
const express = require("express");
const connection = require('./config/connection');

// html routes
const htmlRouter = require('./routes/html-routes');
const booksRouter = require('./routes/books-api-routes');
// express app
const app = express();
const PORT = process.env.PORT || 8080;
cors();
// require models for syncing
const db = require('./models');

// middleware for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory
app.use(express.static('public'));

// invoke routes
htmlRouter(app);
booksRouter(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
  });