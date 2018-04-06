'use strict';
const authService = require('../services/auth.service');

function login(req, res) {
  let tokenId = req.body.id;
  authService.login(tokenId)
  .then(user => {
    if(user) {
      res.status(200).send(user);
    }
    else {
      res.status(404).send({message: 'Usuario no encontrado.'});
    }
  })
  .catch(error => {
    res.status(500).send({message: 'El usuario no pudo ser autenticado.', error});
  });
}


module.exports = {
  login
}