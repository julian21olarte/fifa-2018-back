'use strict';
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = process.env.PORT || '3000';
const database = require('./database/database');
const cors = require('cors');

const app = express();

const teams = require('./routes/teams.route');
const auth = require('./routes/auth.route');
const games = require('./routes/games.route');
const bets = require('./routes/bets.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// cors
app.use(cors({credentials: true, origin: '*'}));

// routes
app.use('/teams', teams);
app.use('/auth', auth);
app.use('/games', games);
app.use('/bets', bets);

// server
const server = app.listen(port, () => {
  console.log("Server listening on " + port);
});

var gameCronjob = require('./cronjobs/game.cronjob');
//gameCronjob.updateGames.start();

module.exports = app;