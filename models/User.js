const mongoose = require('mongoose');
const db = require('../config/db');

const UserSchema = mongoose.Schema({         
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    }
});

module.exports = mongoose.model('users', UserSchema); 