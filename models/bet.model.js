'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const betSchema = new Schema({
    game: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    value: { type: Number, required: true },
    fee: { type: Number, required: true },
    status: { type: String, required: true, default: 'Pending' },
    typeBet: { type: String, enum: ['Winner', 'Result'], required: true, default: 'Winner' },
    result: { 
        team1: {type: Number, required: false, default: null},
        team2: {type: Number, required: false, default: null} 
    },
    date: {type: Date, required: true}
});
module.exports = mongoose.model('Bet', betSchema);