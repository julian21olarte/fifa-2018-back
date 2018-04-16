'use strict';
const userService = require('../services/user.service');

function getBill(req, res) {
  let userId = req.body.id;
  userService.getBill(userId)
  .then(user => {
    res.status(200).send(user.bill.toFixed(2));
  })
  .catch(error => {
    res.status(500).send({message: 'Error al obtener la cartera del usuario.'});
  });
}

module.exports = {
  getBill
}