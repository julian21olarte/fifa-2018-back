'use strict';
var express = require('express');
var router = express.Router();
const teams = require('../api/teams.api');

router.get('/', teams.get);
router.get('/groups', teams.getGroups);
router.get('/groups/:group', teams.getTeamsByGroup);

module.exports = router;
