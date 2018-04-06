'use strict';
const teamService = require('../services/team.service');

function get(req, res) {
  teamService.getTeams()
  .then(teams => {
    if(teams && teams.length) {
      return res.status(200).send(teams);
    }
    res.status(404).send({message: 'Dont exist any team'} );
  })
  .catch(error => {
    if(error) {
      res.status(500).send({message: 'Error on get teams'} );
    }
  });
}

function getGroups(req, res) {
  teamService.getTeams()
  .then(teams => {
    if(teams && teams.length) {
      let groupsMap = {};
      teams.map((team) => {
        if(!groupsMap[team.group]) {
          groupsMap[team.group] = [];
        }
        groupsMap[team.group].push(team);
      });
      return res.status(200).send(groupsMap);
    }
    res.status(404).send({message: 'Dont exist any group'} );
  })
  .catch(error => {
    if(error) {
      res.status(500).send({message: 'Error on get groups', error: error} );
    }
  });
}

function getTeamsByGroup(req, res) {
  let group = req.params.group;
  group = group.toUpperCase();
  teamService.getTeamsByGroup(group)
  .then(teams => {
    if(teams && teams.length) {
      return res.status(200).send(teams);
    }
    res.status(404).send({message: 'Dont exist any team in group ' + group} );
  })
  .catch(error => {
    if(error) {
      res.status(500).send({message: 'Error on get teams'} );
    }
  });
}


module.exports = {
  get,
  getGroups,
  getTeamsByGroup
}