const express = require("express");
const connection = require('./config/connection');

// html routes

// express app
const app = express();
const PORT = process.env.PORT || 8080;

// require models for syncing
const db = require('./models');

// middleware for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory
app.use(express.static('public'));

// invoke routes

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
  });