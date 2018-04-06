'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    group: { type: String, required: true },
    img: { type: String }
});
module.exports = mongoose.model('Team', teamSchema);