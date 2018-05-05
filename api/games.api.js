'use strict';
const gameService = require('../services/game.service.js')

function get(req, res) {
  gameService.getAll(req.query.userId)
  .then(games => {
    return res.status(200).send(games);
  })
  .catch(error => {
    res.status(500).send({message: 'Error al obtener los partidos.'});
  });
}

function getById(req, res) {
  let id = req.params.id;
  gameService.getById(id)
  .then(game => {
    if(game) {
      return res.status(200).send(game);
    }
    res.status(404).send({message: 'No existe un partido con ese id'});
  })
  .catch(error => {
    res.status(500).send({message: 'Error al obtener el partido.'});
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
  getById,
  save
}