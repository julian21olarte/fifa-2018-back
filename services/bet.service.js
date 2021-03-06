'use strict';
const betModel = require('../models/bet.model');
const userService = require('../services/user.service');
const gameService = require('../services/game.service');

function getByUserId(user) {
  return betModel.find({user}).sort({date: 'asc'}).populate('game');
}

function getBetsByUserAndGameId(user, game) {
  return betModel.find({user, game});
}

function save(bet) {
  let userId = bet.user;
  return userService.findById(userId)
  .then(user => {
    if(user) {
      let updatedBill = (user.bill - bet.value);
      user.bill = (user.bill - bet.value);
      return user.save()
      .then(userUpdated => {
        if(userUpdated) {
          return betModel.create(bet);
        }
      });
    }
  });
}

function updateBetsByGameId(gameId) {
  return betModel.find({game: gameId})
  .populate('game')
  .exec()
  .then(bets => {
    console.log('Hay ' + bets.length + ' Apuestas');
    if(bets && bets.length) {
      return bets.map(bet => {
        let calculatedBill = getNewBill(bet);
        userService.findById(bet.user)
        .then(user => {
          bet.user = user;
          user.bill = (user.bill + calculatedBill).toFixed(2);
          return user.save();
        });
        bet.status = 'Finalized';
        bet.gain = calculatedBill ? calculatedBill.toFixed(2) : (bet.value * -1);
        console.log(bet);
        return bet.save();
      });
    }
  });
}

function getNewBill(bet) {
  let res = 0;
  if(bet.typeBet === 'Winner') {
    if(
      (bet.result.team1 > bet.result.team2 && bet.game.team1Goals > bet.game.team2Goals) ||
      (bet.result.team2 > bet.result.team1 && bet.game.team2Goals > bet.game.team1Goals)) {
        res = bet.fee * bet.value;
    }
  }
  else {
    if(bet.result.team1 == bet.game.team1Goals && bet.result.team2 == bet.game.team2Goals) {
      res = bet.fee * bet.value;
    }
  }
  return res;
}

module.exports = {
  getByUserId,
  save,
  updateBetsByGameId,
  getBetsByUserAndGameId
}