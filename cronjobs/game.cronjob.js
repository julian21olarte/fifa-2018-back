'use strict';
const cron = require('node-cron');
const gameService = require('../services/game.service');
const betService = require('../services/bet.service');

 
const updateGames = cron.schedule('* * * * *', function(){
  gameService.updateGamesExpired()
  .then(games => {
    console.log('Hay exactamente ' + games.length + ' juegos');
    console.log(games);
    games.forEach(game => {
      console.log(game);
      betService.updateBetsByGameId(game._id);
    });
    console.log('Se ejecuto el cronjob');
  })
}, false);

module.exports = {
  updateGames
} 