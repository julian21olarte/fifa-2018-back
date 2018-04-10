'use strict';
const gameModel = require('../models/game.model');

function getAll() {
  return gameModel.find({}).sort({date: 'asc'});;
}

function save(game) {
  return gameModel.create(game);
}

function updateGamesExpired() {
  return gameModel.find({date: { $lt: new Date() }, status: 'Comming Soon'})
  .then(games => {
    if(games && games.length) {
      games.forEach(game => {
        let team1Goals = Math.floor(Math.random() * 7) + 1 ;
        let team2Goals = Math.floor(Math.random() * 7) + 1 ;
        game.status = 'Finalized';
        game.team1Goals = team1Goals;
        game.team2Goals = team2Goals;
        return game.save();
      });
    }
  });
}

module.exports = {
  getAll,
  save,
  updateGamesExpired
}