'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const teamSchema = mongoose.model('Team').schema;

const randomFee = function() {
    return (Math.random() * (10 - 1) + 1).toFixed(1);
}
const gameSchema = new Schema({
    team1: { type: teamSchema, required: true },
    team2: { type: teamSchema, required: true },
    status: { type: String, required: true, default: 'Comming Soon' },
    team1Goals: { type: Number, required: false, default: null },
    team2Goals: { type: Number, required: false, default: null },
    fees: { 
        team1: {type: Number, required: true, default: randomFee},
        team2: {type: Number, required: true, default: randomFee},
    },
    date: {type: Date, required: true}
});
module.exports = mongoose.model('Game', gameSchema);