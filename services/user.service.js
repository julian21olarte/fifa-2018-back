'use strict';
const userModel = require('../models/user.model');
const authService = require('../services/auth.service');


function updateBill(user, bill) {
  return userModel.findOne({_id: user}, {bill});
}

function getUserByTokenId(tokenId) {
  return authService.validateToken(tokenId)
  .then(decodedToken => {
    if(decodedToken && decodedToken.uid) {
      return userModel.findOne({tokenId: decodedToken.uid});
    }
  })
  .catch(error => {
    console.log(error);
  });
}

function findById(id) {
  return userModel.findOne({_id: id});
}

module.exports = {
  updateBill,
  getUserByTokenId,
  findById
}