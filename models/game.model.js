'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const teamSchema = mongoose.model('Team').schema;

const gameSchema = new Schema({
    team1: { type: teamSchema, required: true },
    team2: { type: teamSchema, required: true },
    status: { type: String, required: true, default: 'Comming Soon' },
    team1Goals: { type: Number, required: false, default: null },
    team2Goals: { type: Number, required: false, default: null },
    date: {type: Date, required: true}
});
module.exports = mongoose.model('Game', gameSchema);