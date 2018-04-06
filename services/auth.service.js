'use strict';
const userModel = require('../models/user.model');
const firebase = require('firebase-admin');


function login(tokenId) {
  return firebase.auth().verifyIdToken(tokenId)
  .then(decodedToken => {
    if(decodedToken && decodedToken.uid) {
      return userModel.findOne({tokenId: decodedToken.uid})
      .then(user => {
        if(user) {
          return user;
        }
        return userModel.create({tokenId: decodedToken.uid});
      });
    }
  });
}

module.exports = {
  login
}