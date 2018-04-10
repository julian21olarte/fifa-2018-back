'use strict';
const cron = require('node-cron');
const gameService = require('../services/game.service');

 
const updateGames = cron.schedule('* * * * *', function(){
  gameService.updateGamesExpired()
  .then(res => {
    console.log('Se ejecuto el cronjob');
  })
}, false);

module.exports = {
  updateGames
} 