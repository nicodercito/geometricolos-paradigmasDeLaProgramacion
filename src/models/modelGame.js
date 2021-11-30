const mongoose = require('mongoose');
const mogoose = require('mongoose');
const Schema = mogoose.Schema;

const GameSchema = new Schema({
    playerId: Integer,
    name: String,
    status:{
        type: Boolean,
        default: flase
    },
    Points: Integer
});

module.exports = mongoose.model('task', GameSchema);