'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    tokenId: { type: String, required: false },
    bill: { type: Number, required: false, default: 5 },
});
module.exports = mongoose.model('User', userSchema);