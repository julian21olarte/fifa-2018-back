'use strict';
const betModel = require('../models/bet.model');
const userService = require('../services/user.service');

function getByUserId(user) {
  return betModel.find({user});
}

function save(bet) {
  let userId = bet.user;
  return userService.findById(userId)
  .then(user => {
    if(user) {
      console.log(user);
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


module.exports = {
  getByUserId,
  save
}