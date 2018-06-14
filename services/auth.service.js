'use strict';
const userModel = require('../models/user.model');
const firebase = require('firebase-admin');


function login(tokenId) {
  return this.validateToken(tokenId)
  .then(decodedToken => {
    if(decodedToken && decodedToken.uid) {
      return userModel.findOne({tokenId: decodedToken.uid})
      .then(user => {
        if(user) {
          return user;
        }
        let newUser = {
          tokenId: decodedToken.uid,
          //isAdmin: decodedToken.uid === 'MJ5p0dwo2ROLQg44KBT14D3cRAG2' ? true : false
          isAdmin: (decodedToken.uid === 'MJ5p0dwo2ROLQg44KBT14D3cRAG2' || decodedToken.uid === 'TK9u7rVncyMaNm8zxHnhlRHbGKI2')
        }
        return userModel.create(newUser);
      });
    }
  });
}

function validateToken(tokenId) {
  return firebase.auth().verifyIdToken(tokenId);
}

module.exports = {
  login,
  validateToken
}