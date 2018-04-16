'use strict';
var express = require('express');
var router = express.Router();
const users = require('../api/users.api');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/bill', users.getBill);

module.exports = router;
