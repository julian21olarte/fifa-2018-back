'use strict';
const gameService = require('../services/game.service.js')

function get(req, res) {
  gameService.getAll()
  .then(games => {
    res.status(200).send(games);
  })
  .catch(error => {
    res.status(500).send({message: 'Error al obtener los partidos.'});
  });
}

function save(req, res){
  let game = req.body.game;
  gameService.save(game)
  .then(gameSaved => {
    if(gameSaved) {
     return res.status(200).send({game, message: 'Nuevo partido guardado correctamente.'});
    }
    res.status(500).send({message: 'Error al guardar un nuevo partido'});
  })
  .catch(error => {
    res.status(500).send({message: 'Error al guardar un nuevo partido.'});
  });
}


module.exports = {
  get,
  save
}