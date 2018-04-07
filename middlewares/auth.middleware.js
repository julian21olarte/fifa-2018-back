'use strict';
const authService = require('../services/auth.service');
const userModel = require('../models/user.model');

function isUser(req, res, next) {
  let tokenId = req.body.tokenId;
  authService.validateToken(tokenId)
  .then(decodedToken => {
    if(decodedToken && decodedToken.uid) {
      return next();
    }
    return res.status(401).send({message: 'No tienes permisos para realizar esta accion.'});
  })
  .catch(error => {
    res.status(500).send({message: 'Ha ocurrido un error, por favor intentalo mas tarde.'});
  });
}

function isAdmin(req, res, next) {
  let tokenId = req.body.tokenId;
  authService.validateToken(tokenId)
  .then(decodedToken => {
    if(decodedToken && decodedToken.uid) {
      return userModel.find({tokenId: decodedToken.uid})
      .then(user => {
        console.log(user);
        if(user) {
          return next();
        }
        res.status(401).send({message: 'No tienes permisos para realizar esta accion.'});
      })
      .catch(error => {
        res.status(500).send({message: 'Ha ocurrido un error, por favor intentalo mas tarde.'});
      });
    }
    res.status(401).send({message: 'No tienes permisos para realizar esta accion.'});
  });
}

module.exports = {
  isUser,
  isAdmin
}