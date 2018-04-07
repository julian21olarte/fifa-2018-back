'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    tokenId: { type: String, required: false },
    bill: { type: Number, required: false, default: 5 },
    isAdmin: { type: Boolean, required: false, default: false }
});
module.exports = mongoose.model('User', userSchema);