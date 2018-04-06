'use strict';
var express = require('express');
var router = express.Router();
const auth = require('../api/auth.api');

router.post('/login', auth.login);

module.exports = router;
