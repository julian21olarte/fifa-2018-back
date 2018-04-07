'use strict';
const gameModel = require('../models/game.model');

function getAll() {
  return gameModel.find({}).sort({date: 'asc'});;
}

function save(game) {
  return gameModel.create(game);
}
module.exports = {
  getAll, save
}