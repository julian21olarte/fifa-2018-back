'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const betSchema = new Schema({
    game: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    value: { type: Number, required: true },
    status: { type: String, required: true, default: 'Pending' },
    date: {type: Date, required: true}
});
module.exports = mongoose.model('Bet', betSchema);