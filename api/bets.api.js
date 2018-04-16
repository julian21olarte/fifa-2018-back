'use strict';
const betService = require('../services/bet.service');

function getByUserId(req, res) {
  let userId = req.params.userId;
  betService.getByUserId(userId)
  .then(bets => {
      res.status(200).send(bets);
  })
  .catch(error => {
    res.status(500).send({message: 'Error al obtener las apuestas de un usuario.'});
  });
}

function save(req, res) {
  let bet = req.body.bet;
  let tokenId = req.body.tokenId;
  betService.save(bet)
  .then(newBet => {
    if(newBet) {
      return res.status(200).send({bet: newBet, message: 'Nueva apuesta registrada correctamente'});
    }
    res.status(500).send({message: 'Error al crear una nueva apuesta.'});
  })
  .catch(error => {
    res.status(500).send({message: 'Error en la base de datos al crear una nueva apuesta.', error});
  });
}

module.exports = {
  getByUserId,
  save
}