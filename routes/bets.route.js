'use strict';
var express = require('express');
var router = express.Router();
const bets = require('../api/bets.api');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/:userId', bets.getByUserId);
router.post('/save', authMiddleware.isUser, bets.save);

module.exports = router;
