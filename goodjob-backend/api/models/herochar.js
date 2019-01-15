const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema and model

const HeroSchema = new Schema({
    name: String,
    weight: Number,
    height: Number,
    age: Number,
    hobbies: String,
    avatar: String
});

const HeroChar = mongoose.model('hero', HeroSchema);

module.exports = HeroChar;
