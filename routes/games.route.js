'use strict';
var express = require('express');
var router = express.Router();
const games = require('../api/games.api');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', games.get);
router.get('/:id', games.getById);
router.post('/save', authMiddleware.isAdmin, games.save);

module.exports = router;
