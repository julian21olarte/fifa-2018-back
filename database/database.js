'use strict';
const db_config = require('./db.config');
const mongoose = require('mongoose');
const mongo_url = db_config.dev;

var firebase = require("firebase-admin");
var serviceAccount = require('./firebase-admin-file.json');

// MongoDB Setup (Mongoose)
mongoose.connect(mongo_url)
.then( () => {
    console.log('Database connection OK...');
})
.catch(err => console.log(err));
mongoose.Promise = global.Promise;


// Firebase Setup
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://fifa-2018-d691d.firebaseio.com'
});