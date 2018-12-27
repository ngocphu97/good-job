const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema and model

const HeroSchema = new Schema({
    name: String,
    weight: Number,
    height: Number,
    age: Number,
    hobbies: String,
    avatar: String,
    abilities: String
});

const Hero = mongoose.model('hero', HeroSchema);

module.exports = Hero;

