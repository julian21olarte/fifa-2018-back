'use strict';
const teamModel = require('../models/team.model');

function getTeams() {
  return teamModel.find({});
}

function getTeamsByGroup(group) {
  return teamModel.find({group})
}

module.exports = {
  getTeams,
  getTeamsByGroup
}