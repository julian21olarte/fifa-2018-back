'use strict';
const gameModel = require('../models/game.model');
const betService = require('../services/bet.service');

function getAll() {
  return gameModel.find({}).sort({date: 'asc'});
}

function getById(id) {
  return gameModel.findOne({_id: id});
}

function save(game) {
  return gameModel.create(game);
}

function updateGamesExpired() {
  return gameModel.find({date: { $lt: new Date() }, status: 'Comming Soon'})
  .then(games => {
    console.log('Numero de JUEGOS: '+games.length);
    if(games && games.length) {
      return Promise.all(games.map(game => {
        //let team1Goals = 1 ;
        let team1Goals = Math.floor(Math.random() * 7) + 1 ;
        let team2Goals = Math.floor(Math.random() * 7) + 1 ;
        //let team2Goals = 3 ;
        game.status = 'Finalized';
        game.team1Goals = team1Goals;
        game.team2Goals = team2Goals;
        return game.save();
      }));
    }
    return games;
  });
}

module.exports = {
  getAll,
  getById,
  save,
  updateGamesExpired
}